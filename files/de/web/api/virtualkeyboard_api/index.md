---
title: VirtualKeyboard API
slug: Web/API/VirtualKeyboard_API
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{SeeCompatTable}}{{DefaultAPISidebar("VirtualKeyboard API")}}{{securecontext_header}}

Die VirtualKeyboard API bietet Entwicklern die Möglichkeit, das Layout ihrer Anwendungen zu kontrollieren, wenn die virtuelle Tastatur auf dem Bildschirm von Geräten wie Tablets, Mobiltelefonen oder anderen Geräten, bei denen möglicherweise keine Hardware-Tastatur verfügbar ist, erscheint und verschwindet.

Webbrowser kümmern sich normalerweise selbst um virtuelle Tastaturen, indem sie die Höhe des Viewports anpassen und zu Eingabefeldern scrollen, wenn diese fokussiert sind.

Die Abbildung unten zeigt den Unterschied in der Höhe des Viewports und der Scrollposition auf einer Webseite, wenn die virtuelle Tastatur des Geräts ausgeblendet und angezeigt wird.

![Zwei Geräte, eines ohne virtuelle Tastatur, zeigt, dass die Webseite den größten Teil des vertikalen Platzes des Geräts nutzen kann, und eines mit virtueller Tastatur, zeigt, dass die Webseite nur im verbleibenden Raum angezeigt werden kann](viewport-height.png)

Komplexere Anwendungen oder spezielle Geräte wie Multiscreen-Mobiltelefone erfordern möglicherweise mehr Kontrolle über das Layout, wenn die virtuelle Tastatur erscheint.

Die Abbildung unten zeigt, was auf einem Gerät mit zwei Bildschirmen passiert, wenn die virtuelle Tastatur nur auf einem der beiden Bildschirme erscheint. Der Viewport wird auf beiden Bildschirmen kleiner, um Platz für die virtuelle Tastatur zu schaffen, wodurch auf dem Bildschirm, auf dem die virtuelle Tastatur nicht angezeigt wird, Platz verschwendet wird.

![Ein Gerät mit zwei Bildschirmen, mit auf einem Bildschirm angezeigter virtueller Tastatur, zeigt, dass die Webseite nur den vertikalen Platz nutzen kann, der nach Einblenden der Tastatur verbleibt, selbst wenn dadurch auf dem anderen Bildschirm leerer Raum bleibt](dual-screen.png)

Die VirtualKeyboard API kann verwendet werden, um sich von der automatischen Handhabung der virtuellen Tastatur durch den Browser abzumelden und stattdessen die volle Kontrolle zu übernehmen. Mit der VirtualKeyboard API erscheint und verschwindet die Tastatur weiterhin wie nötig, wenn Formularelemente fokussiert sind, aber der Viewport ändert sich nicht, und Sie können JavaScript und CSS verwenden, um Ihr Layout anzupassen.

## Konzept

Die VirtualKeyboard API besteht aus drei Teilen:

- Das Interface [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard), das über [`navigator.virtualKeyboard`](/de/docs/Web/API/Navigator/virtualKeyboard) zugegriffen wird, wird verwendet, um aus dem automatischen Verhalten der virtuellen Tastatur auszusteigen, die virtuelle Tastatur programmatisch anzuzeigen oder zu verbergen sowie um die aktuelle Position und Größe der virtuellen Tastatur abzurufen.
- Die CSS-Umgebungsvariablen `keyboard-inset-*` liefern Informationen über die Position und Größe der virtuellen Tastatur.
- Das Attribut [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Reference/Global_attributes/virtualkeyboardpolicy) gibt an, ob die virtuelle Tastatur bei `contenteditable` Elementen erscheinen soll.

### Abmelden vom automatischen Verhalten der virtuellen Tastatur

Um sich vom automatischen Verhalten der virtuellen Tastatur des Browsers abzumelden, verwenden Sie `navigator.virtualKeyboard.overlaysContent = true`. Der Browser passt die Größe des Viewports nicht mehr automatisch an, um Platz für die virtuelle Tastatur zu schaffen, die stattdessen Ihre Inhalte überlagern wird.

### Die Geometrie der virtuellen Tastatur mit JavaScript erkennen

Sobald Sie sich vom Standardverhalten des Browsers abgemeldet haben, können Sie die aktuelle Geometrie der virtuellen Tastatur mit `navigator.virtualKeyboard.boundingRect` erfassen und das Layout bei Bedarf mit CSS und JavaScript anpassen. Zusätzlich können Sie Geometrieänderungen, wie das Ein- oder Ausblenden der Tastatur, mit dem `geometrychange`-Event beobachten.

Dies ist nützlich, um wichtige UI-Elemente in dem Bereich zu positionieren, der nicht von der virtuellen Tastatur überdeckt wird.

Der folgende Code-Schnipsel nutzt das `geometrychange`-Event, um zu erkennen, wann sich die Geometrie der virtuellen Tastatur ändert; es wird anschließend auf die `boundingRect`-Eigenschaft zugegriffen, um die Größe und Position der virtuellen Tastatur abzufragen:

```js
if ("virtualKeyboard" in navigator) {
  navigator.virtualKeyboard.overlaysContent = true;

  navigator.virtualKeyboard.addEventListener("geometrychange", (event) => {
    const { x, y, width, height } = event.target.boundingRect;
  });
}
```

### Die Geometrie der virtuellen Tastatur mit CSS-Umgebungsvariablen erkennen

Die VirtualKeyboard API stellt auch folgende [CSS-Umgebungsvariablen](/de/docs/Web/CSS/env) zur Verfügung: `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, und `keyboard-inset-height`.

Die `keyboard-inset-*` CSS-Umgebungsvariablen sind nützlich, um Ihr Layout bei Erscheinen der virtuellen Tastatur mittels CSS anzupassen. Sie definieren ein Rechteck mit ihren Einsätzen oben, rechts, unten und links von der Kante des Viewports. Die Variablen `width` und `height` sind ebenfalls verfügbar, falls benötigt.

Der folgende Code-Schnipsel verwendet die CSS-Variable `keyboard-inset-height`, um Platz für das Erscheinen der virtuellen Tastatur unterhalb der Nachrichtenliste und dem Eingabefeld in einer chat-ähnlichen Anwendung zu reservieren. Wenn die virtuelle Tastatur ausgeblendet ist, gibt die `env()`-Funktion `0px` zurück und der `keyboard`-Gridbereich wird versteckt. Die Nachrichten- und Eingabeelemente können die gesamte Höhe des Viewports nutzen. Wenn die virtuelle Tastatur erscheint, erhält der `keyboard`-Gridbereich die Höhe der virtuellen Tastatur.

```html
<style>
  body {
    display: grid;
    margin: 0;
    height: 100vh;
    grid-template:
      "messages" 1fr
      "input" auto
      "keyboard" env(keyboard-inset-height, 0px);
  }
</style>
<ul id="messages"></ul>
<input type="text" />
<script>
  if ("virtualKeyboard" in navigator) {
    navigator.virtualKeyboard.overlaysContent = true;
  }
</script>
```

### Steuerung der virtuellen Tastatur auf `contenteditable` Elementen

Standardmäßig lösen Elemente, die das Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) verwenden, auch die virtuelle Tastatur aus, wenn sie angetippt oder angeklickt werden. In bestimmten Situationen kann es wünschenswert sein, dieses Verhalten zu verhindern und stattdessen die virtuelle Tastatur nach einem anderen Ereignis anzuzeigen.

Setzen Sie das Attribut [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Reference/Global_attributes/virtualkeyboardpolicy) auf `manual`, um die Standardbehandlung der virtuellen Tastatur im Browser zu unterbinden und stattdessen die Kontrolle selbst zu übernehmen, indem Sie die Methoden `show()` und `hide()` des [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard)-Interfaces verwenden.

Der folgende Code-Schnipsel zeigt, wie das Attribut `virtualkeyboardpolicy` und die Methode `navigator.virtualKeyboard.show()` verwendet werden können, um die virtuelle Tastatur bei einem Doppelklick anzuzeigen:

```html
<div contenteditable virtualkeyboardpolicy="manual" id="editor"></div>
```

```js
if ("virtualKeyboard" in navigator) {
  navigator.virtualKeyboard.overlaysContent = true;

  const editor = document.getElementById("editor");
  editor.addEventListener("dblclick", () => {
    navigator.virtualKeyboard.show();
  });
}
```

## Schnittstellen

- [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard) {{experimental_inline}}
  - : Bietet Funktionen zum Abrufen von Tastaturlayout-Karten und zum Umschalten der Erfassung von Tastendrücken von der physischen Tastatur.

## Erweiterungen zu anderen Schnittstellen

- [`Navigator.virtualKeyboard`](/de/docs/Web/API/Navigator/virtualKeyboard) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt einen Verweis auf die [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard) API zurück, um die Kontrolle über die virtuelle Bildschirmtastatur zu übernehmen.
- [`HTMLElement.virtualkeyboardpolicy`](/de/docs/Web/API/HTMLElement/virtualKeyboardPolicy) {{experimental_inline}}
  - : Ein String, der angibt, ob die Standardrichtlinie des Browsers zum Anzeigen der virtuellen Tastatur verwendet werden soll, wenn das Element fokussiert ist, oder ob das Anzeigen der virtuellen Tastatur manuell gehandhabt werden soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Volle Kontrolle mit der VirtualKeyboard API](https://developer.chrome.com/docs/web-platform/virtual-keyboard/)
