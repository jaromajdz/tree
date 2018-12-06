import React, { Component } from 'react';
import DButton from '../UI/DButton/DButton';
import './Tree.css';

class Tree extends Component {

    //contain refs to ul element
    elems = {};

    state = {
      tree: {
        komputery: {
              stacjonarne: null,
              mobilne: {
              laptopy: null,
                tablety: {
                   duze: null,
                   male: null
                  }
              }

            },
        telewizory: null,
        inne_badziewie: null,
      }
    };

  //Display ul block or not elem_id is a key from state.tree

  showPlus = (elem_id) => {
      const vis = (this.elems[elem_id].style.display==="block" ? "none" : "block")
      this.elems[elem_id].style.display = vis;
      }

  //solution for manin ul

  tree(tree){
      return React.createElement('ul', {}, this.render_tree({...tree}))
  }

  //Making a tree

  render_tree(tree, level){

    let list = []
    const cr = React.createElement

    for(let key in tree){

        let name = key.replace('_',' ')

        if(tree[key] instanceof Object){

            list.push(cr('li',{}, [
                                  cr('div',{className: 'lidiv'}, [ <DButton show={()=>this.showPlus(key)}/> ,name]),
                                  cr('ul', {style:{display: 'block'},ref: el=>this.elems[key]=el} ,this.render_tree(tree[key], level))
                                  ]
                                )
                              )

        } else {

            list.push(cr('li',{}, cr('div',{className: 'lidiv'}, name)))
      }

    }
    return list
  }

    render(){

      let treee = this.tree(this.state.tree)

      return <div>{treee}</div>;
    }
}

export default Tree;
