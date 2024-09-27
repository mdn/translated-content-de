---
title: Verwendung der Document Picture-in-Picture API
slug: Web/API/Document_Picture-in-Picture_API/Using
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{SeeCompatTable}}{{DefaultAPISidebar("Document Picture-in-Picture API")}}{{securecontext_header}}

Dieser Leitfaden bietet eine Anleitung zur typischen Nutzung der [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API).

> [!NOTE]
> Sie können das vorgestellte Demo in Aktion bei [Document Picture-in-Picture API Example](https://mdn.github.io/dom-examples/document-picture-in-picture/) sehen (siehe auch den vollständigen [Quellcode](https://github.com/mdn/dom-examples/tree/main/document-picture-in-picture)).

## Beispiel HTML

Das folgende HTML richtet einen einfachen Videoplayer ein.

```html
<div id="container">
  <p class="in-pip-message">
    Video player is currently in the separate Picture-in-Picture window.
  </p>
  <div id="player">
    <video
      src="assets/bigbuckbunny.mp4"
      id="video"
      controls
      width="320"></video>

    <div id="credits">
      <a href="https://peach.blender.org/download/" target="_blank">
        Video by Blender </a
      >;
      <a href="https://peach.blender.org/about/" target="_blank">
        licensed CC-BY 3.0
      </a>
    </div>

    <div id="controlbar">
      <p class="no-picture-in-picture">
        Document Picture-in-Picture API not available
      </p>

      <p></p>
    </div>
  </div>
</div>
```

## Funktionsüberprüfung

Um zu überprüfen, ob die Document Picture-in-Picture API unterstützt wird, können Sie testen, ob `documentPictureInPicture` auf `window` verfügbar ist:

```js
if ("documentPictureInPicture" in window) {
  document.querySelector(".no-picture-in-picture").remove();

  const togglePipButton = document.createElement("button");
  togglePipButton.textContent = "Toggle Picture-in-Picture";
  togglePipButton.addEventListener("click", togglePictureInPicture, false);

  document.getElementById("controlbar").appendChild(togglePipButton);
}
```

Falls es verfügbar ist, entfernen wir die Nachricht "Document Picture-in-Picture API nicht verfügbar" und fügen stattdessen ein {{htmlelement("button")}} Element hinzu, um den Videoplayer in einem Document Picture-in-Picture-Fenster zu öffnen.

## Öffnen eines Picture-in-Picture-Fensters

Das folgende JavaScript ruft [`window.documentPictureInPicture.requestWindow()`](/de/docs/Web/API/DocumentPictureInPicture/requestWindow) auf, um ein leeres Picture-in-Picture-Fenster zu öffnen. Das zurückgegebene {{jsxref("Promise")}} wird mit einem Picture-in-Picture [`Window`](/de/docs/Web/API/Window) Objekt erfüllt. Der Videoplayer wird in dieses Fenster verschoben, indem [`Element.append()`](/de/docs/Web/API/Element/append) verwendet wird, und wir zeigen die Nachricht an, die den Benutzer darüber informiert, dass es verschoben wurde.

Die `width` und `height` Optionen von `requestWindow()` setzen das Picture-in-Picture-Fenster auf die gewünschte Größe. Browser können die Optionswerte einschränken, wenn sie zu groß oder zu klein sind, um eine benutzerfreundliche Fenstergröße zu ermöglichen.

```js
async function togglePictureInPicture() {
  // Early return if there's already a Picture-in-Picture window open
  if (window.documentPictureInPicture.window) {
    return;
  }

  // Open a Picture-in-Picture window.
  const pipWindow = await window.documentPictureInPicture.requestWindow({
    width: videoPlayer.clientWidth,
    height: videoPlayer.clientHeight,
  });

  // ...

  // Move the player to the Picture-in-Picture window.
  pipWindow.document.body.append(videoPlayer);

  // Display a message to say it has been moved
  inPipMessage.style.display = "block";
}
```

## Kopieren von Stylesheets in das Picture-in-Picture-Fenster

Um alle CSS-Stylesheets aus dem Ursprungsfenster zu kopieren, durchlaufen Sie alle Stylesheets, die explizit in das Dokument eingebunden oder eingebettet sind (über [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets)) und fügen Sie sie dem Picture-in-Picture-Fenster hinzu. Beachten Sie, dass dies ein einmaliger Kopiervorgang ist.

```js
// ...

// Copy style sheets over from the initial document
// so that the player looks the same.
[...document.styleSheets].forEach((styleSheet) => {
  try {
    const cssRules = [...styleSheet.cssRules]
      .map((rule) => rule.cssText)
      .join("");
    const style = document.createElement("style");

    style.textContent = cssRules;
    pipWindow.document.head.appendChild(style);
  } catch (e) {
    const link = document.createElement("link");

    link.rel = "stylesheet";
    link.type = styleSheet.type;
    link.media = styleSheet.media;
    link.href = styleSheet.href;
    pipWindow.document.head.appendChild(link);
  }
});

// ...
```

## Stile im Picture-in-Picture-Modus anpassen

Der `picture-in-picture` Wert des {{cssxref("@media/display-mode", "display-mode")}} [Media Features](/de/docs/Web/CSS/@media#media_features) ermöglicht es Entwicklern, CSS auf ein Dokument anzuwenden, basierend darauf, ob es im Picture-in-Picture-Modus angezeigt wird. Die grundlegende Nutzung sieht wie folgt aus:

```css
@media (display-mode: picture-in-picture) {
  body {
    background: red;
  }
}
```

Dieses Snippet färbt den Hintergrund des Dokument-`<body>` rot, nur wenn es im Picture-in-Picture-Modus angezeigt wird.

In [unserem Demo](https://mdn.github.io/dom-examples/document-picture-in-picture/) kombinieren wir den `display-mode: picture-in-picture` Wert mit dem {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} Media Feature, um helle und dunkle Farbschemata zu erstellen, die basierend auf der Farbpräferenz des Benutzers angewendet werden, nur wenn die App im Picture-in-Picture-Modus angezeigt wird.

```css
@media (display-mode: picture-in-picture) and (prefers-color-scheme: light) {
  body {
    background: antiquewhite;
  }
}

@media (display-mode: picture-in-picture) and (prefers-color-scheme: dark) {
  body {
    background: #333;
  }

  a {
    color: antiquewhite;
  }
}
```

## Behandeln des Schließens des Picture-in-Picture-Fensters

Der Code zum erneuten Schließen des Picture-in-Picture-Fensters, wenn der Button ein zweites Mal gedrückt wird, sieht so aus:

```js
inPipMessage.style.display = "none";
playerContainer.append(videoPlayer);
window.documentPictureInPicture.window.close();
```

Hier kehren wir die DOM-Änderungen um – die Nachricht wird ausgeblendet und der Videoplayer wird zurück in den Player-Container im Hauptanwendungsfenster verschoben. Wir schließen auch das Picture-in-Picture-Fenster programmgesteuert mit der Methode [`Window.close()`](/de/docs/Web/API/Window/close).

Sie müssen jedoch auch den Fall berücksichtigen, dass der Benutzer das Picture-in-Picture-Fenster schließt, indem er den vom Browser bereitgestellten Schließen(X)-Button im Fenster selbst drückt. Sie können dies behandeln, indem Sie erkennen, wann das Fenster mit dem [`pagehide`](/de/docs/Web/API/Window/pagehide_event) Event geschlossen wird:

```js
pipWindow.addEventListener("pagehide", (event) => {
  inPipMessage.style.display = "none";
  playerContainer.append(videoPlayer);
});
```

## Lauschen, wenn die Website Picture-in-Picture betritt

Lauschen Sie auf das [`enter`](/de/docs/Web/API/DocumentPictureInPicture/enter_event) Event auf der `DocumentPictureInPicture` Instanz, um zu wissen, wann ein Picture-in-Picture-Fenster geöffnet wird.

In unserem Demo verwenden wir das `enter` Event, um einen Stummschaltungs-Umschaltknopf zum Picture-in-Picture-Fenster hinzuzufügen:

```js
documentPictureInPicture.addEventListener("enter", (event) => {
  const pipWindow = event.window;
  console.log("Video player has entered the pip window");

  const pipMuteButton = pipWindow.document.createElement("button");
  pipMuteButton.textContent = "Mute";
  pipMuteButton.addEventListener("click", () => {
    const pipVideo = pipWindow.document.querySelector("#video");
    if (!pipVideo.muted) {
      pipVideo.muted = true;
      pipMuteButton.textContent = "Unmute";
    } else {
      pipVideo.muted = false;
      pipMuteButton.textContent = "Mute";
    }
  });

  pipWindow.document.body.append(pipMuteButton);
});
```

> [!NOTE]
> Das [`DocumentPictureInPictureEvent`](/de/docs/Web/API/DocumentPictureInPictureEvent) Ereignisobjekt enthält eine `window` Eigenschaft, um auf das Picture-in-Picture-Fenster zuzugreifen.

## Zugriff auf Elemente und Ereignisbehandlung

Sie können auf Elemente im Picture-in-Picture-Fenster auf verschiedene Weise zugreifen:

- Die [`Window`](/de/docs/Web/API/Window) Instanz, die von der Methode [`DocumentPictureInPicture.requestWindow()`](/de/docs/Web/API/DocumentPictureInPicture/requestWindow) zurückgegeben wird, wie oben gesehen.
- Über die `window` Eigenschaft des [`DocumentPictureInPictureEvent`](/de/docs/Web/API/DocumentPictureInPictureEvent) Ereignisobjekts (beim [`enter`](/de/docs/Web/API/DocumentPictureInPicture/enter_event) Event), wie oben gesehen.
- Über die [`DocumentPictureInPicture.window`](/de/docs/Web/API/DocumentPictureInPicture/window) Eigenschaft:

```js
const pipWindow = window.documentPictureInPicture.window;
if (pipWindow) {
  // Mute video playing in the Picture-in-Picture window.
  const pipVideo = pipWindow.document.querySelector("#video");
  pipVideo.muted = true;
}
```

Nachdem Sie eine Referenz zur Picture-in-Picture `window` Instanz haben, können Sie den DOM manipulieren (zum Beispiel Tasten erstellen) und auf Benutzereingaben reagieren (wie [`click`](/de/docs/Web/API/Element/click_event)), wie Sie es normalerweise im regulären Browserfenster-Kontext tun würden.
