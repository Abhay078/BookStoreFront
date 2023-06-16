import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args: string) {
    if(args == 'All Books'){
      return value;
    }
    else{
      args=args.toLowerCase();
    }
    return value.filter((book:any)=>{
      return(
        book.title.toLowerCase().includes(args) | book.author.toLowerCase().includes(args)
      );
    })
  }

}
