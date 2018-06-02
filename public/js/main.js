

 $(document).ready(function(){
    $('.delete-user').on('click',function(){
        var id =$(this).data('id');
        var url ='/delete/'+id;
        if(confirm('Delete User?')){
            $.ajax({
                url : url,
                type :'DELETE',
                success: function(result){
                    console.log("Deleting User");
                    window.location.href='/';
    
                }
                 });
        }
    });
   
//     $('.edit-recipe').on('click',function(){
        
//         $('#edit-form-title').val($(this).data('title'));
//         $('#edit-form-description').val($(this).data('description'));
//         $('#edit-form-ingredients').val($(this).data('ingredients'));
//         $('#edit-form-id').val($(this).data('id'));



//     });

});