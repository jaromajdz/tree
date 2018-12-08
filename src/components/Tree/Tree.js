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
        telewizory: {
          OLED: null,
          LCD: null
        },
        inne_badziewie: null,
      },
      buttons: {}
    };

  //Display ul block or not elem_id is a key from state.tree

  showPlus = (elem_id) => {
        let vis = "block"
        const bt =  {...this.state.buttons}

      if(this.elems[elem_id].style.display==="block"){
        vis = "none"
        bt[elem_id]=false
        this.setState({buttons: {...bt}})
        setTimeout(()=>{this.elems[elem_id].style.display = vis;}, 310)
      }else{
        bt[elem_id]=true
        this.setState({buttons: {...bt}})
        setTimeout(()=>{this.elems[elem_id].style.display = vis;}, 5)
      }


      }

  //solution for manin ul

  tree(tree){

      if(!(Object.keys(this.state.buttons).length>0)){
        const bt = this.buttons({...tree})
        this.setState({buttons: {...bt}})
        }

      return React.createElement('ul', {}, this.render_tree({...tree}))
  }
  //Nodes
  buttons(tree, buttons){

      if (typeof(buttons)==='undefined'){
        buttons = {}
        }

    for(let key in tree){
      if(tree[key] instanceof Object){
        buttons[key]=true;
        this.buttons(tree[key], buttons)
      }
    }
   return buttons
  }


  //Making a tree

  render_tree(tree, level){

    let list = []
    const cr = React.createElement

    for(let key in tree){

        let name = key.replace('_',' ')

        if(tree[key] instanceof Object){

            list.push(cr('li',{key: key+"0"}, [
                                  cr('div',{className: 'lidiv', key: key + "1"}, [ <DButton click={()=>this.showPlus(key)} show={this.state.buttons[key]} key={key+"b" }/> ,name]),
                                  cr('ul',
                                    { style:{display: 'block'},
                                      className: (this.state.buttons[key]? 'openul' : 'closeul'),
                                      key: key+"2",ref: el=>this.elems[key]=el
                                    } ,
                                   this.render_tree(tree[key], level))
                                  ]
                                )
                              )

        } else {

            list.push(cr('li',{key: key+"0"}, cr('div',{className: 'lidiv'}, name)))
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
