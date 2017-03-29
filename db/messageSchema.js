var messageSchema = mongoose.Schema({
    user: String,
    content: String
});

var Message = mongoose.model('Message', messageSchema);
