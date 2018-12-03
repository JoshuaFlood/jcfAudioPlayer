# jcfAudioPlayer

An html5, CSS and JavaScript audioplayer with a scrolling track name and icons from FontAwesome.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

There are no pre-requisites for this audio player. The FontAwesome icons are loaded via their CDN and the player can be tested on your local machine, using a web browser which has JavaScript enabled, without installing any external software.

### Install using remote files

You can use the `/public/index.html` file contained within this repo as a guide.

###### Step 1

Include FontAwesome and jcfAudioPlayer's CSS within the `<head>` tags of the web page in which you wish to display jcfAudioPlayer. To ensure compatibility with IE9, you must also load `html5shiv.js`.

```
<head>

    <!-- Your website's meta-data, title etc. goes here -->

    <!-- Font Awesome CSS -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">

    <!-- jcfAudioPlayer CSS -->
    <link rel="stylesheet" type="text/css" href="http://joshuaflood.co.uk/assets/css/jcfaudioplayer.css">

    <!--[if lt IE 9]>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
    <![endif]-->

</head>
```

###### Step 2

Create a JavaScript file in the same format as this repo's `/public/assets/js/jcfaudioplayer-tracklist.js` file, where the paths in the array are replaced with the path(s) to your own audio files.

If you wish, you can use the tracks hosted on [my portfolio](http://joshuaflood.co.uk/), instead. They are all my own productions, so there is no need to worry about licensing.

```
// Create track URI list.
var trackList = [
    "http://joshuaflood.co.uk/assets/audio/The%20Mysterons%20-%20All%20In%20All%20(Instrumental)%20[Unmastered].mp3",
    "http://joshuaflood.co.uk/assets/audio/The%20Mysterons%20-%20Bad%20Apples%20(Instrumental)%20[Unmastered].mp3",
    "http://joshuaflood.co.uk/assets/audio/Nobody%20-%20Going%20Clear.mp3",
    "http://joshuaflood.co.uk/assets/audio/Nobody%20-%20Murky%20Theme%20Promo%20[Unmastered].mp3",
    "http://joshuaflood.co.uk/assets/audio/Nobody%20-%20Vibration%20Energy%20[Unmastered].mp3"
];
```

###### Step 3

Include the `jcfaudioplayer-tracklist.js` file you just created before the closing `body` tag on the web page that you wish to display jcfAudioPlayer.

```
<body>
    <!-- Your website's html goes here -->

<script src="assets/js/jcfaudioplayer-tracklist.js"></script>
</body>
```

###### Step 4

Include the `jcfaudioplayer.js` file, located within this repo at `/public/assets/js/jcfaudioplayer.js` within your web page. The link to this file must be placed after the `jcfaudioplayer-tracklist.js` file, or the audio files won't be loaded into jcfAudioPlayer.

```
<body>
    <!-- Your website's html goes here -->

<script src="assets/js/jcfaudioplayer-tracklist.js"></script>
<script src="http://joshuaflood.co.uk/assets/js/jcfaudioplayer.js"></script>
</body>
```

###### Step 5

Create a container for jcfAudioPlayer within your website's html code, on the same page as the included CSS and JavaScript. jcfAudioPlayer will fill the space of this container. The elements within jcfAudioPlayer are designed to re-scale automatically, dependant upon the size and proportions of this container. The display tends to look best in a landscape format and I recommend setting the width to `500px` and the height to `200px`, though you are welcome to try out different sizes and see what suits you best. In this example, I have defined the width and height of the container as inline styles, though I recommend including them in a separate `.css` file.

```
<body>

    <div id="audioplayerContainer" style="width:500px;height:200px">
    </div>

</body>
```

###### Step 6

Within this container, create a `div` element with the id "jcfAudioPlayer". This element can be empty, or it can contain a placeholder text to display to the user when JavaScript is not enabled. It is important to note that any html contained within this `div` element will be removed automatically when the page loads, provided that JavaScript is enabled.

```
<body>

    <div id="audioplayerContainer" style="width:500px;height:200px">

        <div id="jcfAudioPlayer">
            Please enable JavaScript to access the audio player.
        </div>

    </div>

</body>
```

If you've done everything correctly, then you will now be able to see jcfAudioPlayer when you access the page, or, if JavaScript is disabled, the placeholder message.

## Built With

* [FontAwesome](https://fontawesome.com/) - A package of icons used for jcfAudioPlayer's control buttons (play, pause, stop etc.)

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Joshua Flood** - *Initial work* - [Freelance Web Developer](http://joshuaflood.co.uk/)

See also the list of [contributors](https://github.com/JoshuaFlood/jcfAudioPlayer/contributors) who participated in this project.

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc

