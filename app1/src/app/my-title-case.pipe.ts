import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myTitleCase'
})
export class MyTitleCasePipe implements PipeTransform {
  transform(value?: any): any {
    if (value == null) return null;
    let prepositions = ['of', 'the', 'in'];
    let words = value.split(' ');
    let numOfWord = words.length;
    for(let i=0; i< numOfWord;i++){
      // if preposition word is the first word then capitalize it --> i!=0
      if(i != 0 && prepositions.includes(words[i])){
        words[i] = words[i].toLowerCase();
      } else {
        words[i] = words[i].substr(0,1).toUpperCase()+words[i].substr(1).toLowerCase();
      }
    }
    return words.join(' ');
  }
}
