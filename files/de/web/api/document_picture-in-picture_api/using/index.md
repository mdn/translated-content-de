---
title: Verwenden der Document Picture-in-Picture API
slug: Web/API/Document_Picture-in-Picture_API/Using
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{SeeCompatTable}}{{DefaultAPISidebar("Document Picture-in-Picture API")}}{{securecontext_header}}

Dieser Leitfaden bietet eine Anleitung zur typischen Verwendung der {{domxref("Document Picture-in-Picture API", "Document Picture-in-Picture API", "", "nocode")}}.

> [!NOTE]
> Sie können das vorgestellte Demo in Aktion sehen: [Dokument Picture-in-Picture API Beispiel](https://mdn.github.io/dom-examples/document-picture-in-picture/) (sehen Sie sich auch den vollständigen [Quellcode](https://github.com/mdn/dom-examples/tree/main/document-picture-in-picture) an).

## Beispiel HTML

Das folgende HTML richtet einen einfachen Videoplayer ein.

```html
<div id="container">
  <p class="in-pip-message">
    Der Videoplayer befindet sich derzeit im separaten Picture-in-Picture-Fenster.
  </p>
  <div id="player">
    <video
      src="assets/bigbuckbunny.mp4"
      id="video"
      controls
      width="320"></video>

    <div id="credits">
      <a href="https://peach.blender.org/download/" target="_blank">
        Video von Blender </a
      >;
      <a href="https://peach.blender.org/about/" target="_blank">
        lizenziert CC-BY 3.0
      </a>
    </div>

    <div id="controlbar">
      <p class="no-picture-in-picture">
        Document Picture-in-Picture API nicht verfügbar
      </p>

      <p></p>
    </div>
  </div>
</div>
```

## Funktionserkennung

Um zu prüfen, ob die Document Picture-in-Picture API unterstützt wird, können Sie testen, ob `documentPictureInPicture` auf `window` verfügbar ist:

```js
if ("documentPictureInPicture" in window) {
  document.querySelector(".no-picture-in-picture").remove();

  const togglePipButton = document.createElement("button");
  togglePipButton.textContent = "Toggle Picture-in-Picture";
  togglePipButton.addEventListener("click", togglePictureInPicture, false);

  document.getElementById("controlbar").appendChild(togglePipButton);
}
```

Falls verfügbar, entfernen wir die Nachricht "Document Picture-in-Picture API nicht verfügbar" und fügen stattdessen ein {{htmlelement("button")}}-Element hinzu, um den Videoplayer in einem Document Picture-in-Picture-Fenster zu öffnen.

## Öffnen eines Picture-in-Picture-Fensters

Das folgende JavaScript ruft {{domxref("DocumentPictureInPicture.requestWindow", "window.documentPictureInPicture.requestWindow()")}} auf, um ein leeres Picture-in-Picture-Fenster zu öffnen. Das zurückgegebene {{jsxref("Promise")}} wird mit einem Picture-in-Picture-{{domxref("Window")}}-Objekt erfüllt. Der Videoplayer wird mit {{domxref("Element.append()")}} in dieses Fenster verschoben, und wir zeigen die Nachricht an, die den Benutzer darüber informiert, dass er verschoben wurde.

Die `width`- und `height`-Optionen von `requestWindow()` setzen das Picture-in-Picture-Fenster auf die gewünschte Größe. Browser können die Optionswerte einschränken, wenn sie zu groß oder zu klein sind, um eine benutzerfreundliche Fenstergröße zu ermöglichen.

```js
async function togglePictureInPicture() {
  // Frühe Rückkehr, wenn bereits ein Picture-in-Picture-Fenster offen ist
  if (window.documentPictureInPicture.window) {
    return;
  }

  // Öffnen eines Picture-in-Picture-Fensters.
  const pipWindow = await window.documentPictureInPicture.requestWindow({
    width: videoPlayer.clientWidth,
    height: videoPlayer.clientHeight,
  });

  // ...

  // Verschieben des Players in das Picture-in-Picture-Fenster.
  pipWindow.document.body.append(videoPlayer);

  // Nachricht anzeigen, dass es verschoben wurde
  inPipMessage.style.display = "block";
}
```

## Kopieren von Stylesheets in das Picture-in-Picture-Fenster

Um alle CSS-Stylesheets aus dem ursprünglichen Fenster zu kopieren, durchlaufen Sie alle explizit verlinkten oder eingebetteten Stylesheets im Dokument (via {{domxref("Document.styleSheets")}}) und fügen Sie sie dem Picture-in-Picture-Fenster hinzu. Beachten Sie, dass dies eine einmalige Kopie ist.

```js
// ...

// Stylesheets aus dem ursprünglichen Dokument kopieren
// damit der Player gleich aussieht.
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

## Zielstile im Picture-in-Picture-Modus anwenden

Der `picture-in-picture`-Wert des {{cssxref("@media/display-mode", "display-mode")}} [Medien-Features](/de/docs/Web/CSS/@media#media_features) ermöglicht Entwicklern, CSS auf ein Dokument anzuwenden, basierend darauf, ob es im Picture-in-Picture-Modus angezeigt wird. Die grundlegende Verwendung sieht folgendermaßen aus:

```css
@media (display-mode: picture-in-picture) {
  body {
    background: red;
  }
}
```

Dieses Snippet färbt den Hintergrund des Dokuments `<body>` rot, nur wenn es im Picture-in-Picture-Modus angezeigt wird.

In [unserem Demo](https://mdn.github.io/dom-examples/document-picture-in-picture/) kombinieren wir den `display-mode: picture-in-picture`-Wert mit dem {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} Medien-Feature, um helle und dunkle Farbschemata zu erstellen, die basierend auf der Farbschema-Präferenz des Benutzers angewendet werden, nur wenn die App im Picture-in-Picture-Modus gezeigt wird.

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

## Behandeln, wenn das Picture-in-Picture-Fenster geschlossen wird

Der Code zum erneuten Schließen des Picture-in-Picture-Fensters, wenn der Button ein zweites Mal gedrückt wird, sieht so aus:

```js
inPipMessage.style.display = "none";
playerContainer.append(videoPlayer);
window.documentPictureInPicture.window.close();
```

Hier werden die DOM-Änderungen rückgängig gemacht — die Nachricht wird ausgeblendet und der Videoplayer zurück in den Player-Container im Hauptanwendungsfenster verschoben. Wir schließen auch das Picture-in-Picture-Fenster programmatisch mit der {{domxref("Window.close()")}}-Methode.

Sie müssen jedoch auch den Fall berücksichtigen, in dem der Benutzer das Picture-in-Picture-Fenster schließt, indem er auf die vom Browser bereitgestellte Schließen-Schaltfläche (X) im Fenster selbst drückt. Dies können Sie behandeln, indem Sie erkennen, wann das Fenster mit Hilfe des [`pagehide`](/de/docs/Web/API/Window/pagehide_event)-Events geschlossen wird:

```js
pipWindow.addEventListener("pagehide", (event) => {
  inPipMessage.style.display = "none";
  playerContainer.append(videoPlayer);
});
```

## Hören, wenn die Website in Picture-in-Picture wechselt

Hören Sie auf das {{domxref("DocumentPictureInPicture.enter_event", "enter")}}-Event der `DocumentPictureInPicture`-Instanz, um zu erfahren, wann ein Picture-in-Picture-Fenster geöffnet wird.

In unserem Demo verwenden wir das `enter`-Event, um dem Picture-in-Picture-Fenster eine Stummschalttaste hinzuzufügen:

```js
documentPictureInPicture.addEventListener("enter", (event) => {
  const pipWindow = event.window;
  console.log("Der Videoplayer ist in das Picture-in-Picture-Fenster gewechselt");

  const pipMuteButton = pipWindow.document.createElement("button");
  pipMuteButton.textContent = "Stumm";
  pipMuteButton.addEventListener("click", () => {
    const pipVideo = pipWindow.document.querySelector("#video");
    if (!pipVideo.muted) {
      pipVideo.muted = true;
      pipMuteButton.textContent = "Laut";
    } else {
      pipVideo.muted = false;
      pipMuteButton.textContent = "Stumm";
    }
  });

  pipWindow.document.body.append(pipMuteButton);
});
```

> [!NOTE]
> Das {{domxref("DocumentPictureInPictureEvent")}}-Ereignisobjekt enthält eine `window`-Eigenschaft, um auf das Picture-in-Picture-Fenster zuzugreifen.

## Zugriff auf Elemente und Ereignisbehandlung

Sie können auf Elemente im Picture-in-Picture-Fenster auf verschiedene Weise zugreifen:

- Die {{domxref("Window")}}-Instanz, die von der {{domxref("DocumentPictureInPicture.requestWindow()")}}-Methode zurückgegeben wird, wie oben gezeigt.
- Über die `window`-Eigenschaft des {{domxref("DocumentPictureInPictureEvent")}}-Ereignisobjekts (beim {{domxref("DocumentPictureInPicture.enter_event", "enter")}}-Event), wie oben gezeigt.
- Über die {{domxref("DocumentPictureInPicture.window")}}-Eigenschaft:

```js
const pipWindow = window.documentPictureInPicture.window;
if (pipWindow) {
  // Video, das im Picture-in-Picture-Fenster abgespielt wird, stumm schalten.
  const pipVideo = pipWindow.document.querySelector("#video");
  pipVideo.muted = true;
}
```

Sobald Sie einen Verweis auf die Picture-in-Picture-`window`-Instanz haben, können Sie den DOM manipulieren (zum Beispiel Schaltflächen erstellen) und auf Benutzereingabeereignisse (wie [`click`](/de/docs/Web/API/Element/click_event)) reagieren, wie Sie es normalerweise im regulären Browserfensterkontext tun würden.
