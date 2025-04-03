---
title: VirtualKeyboard API
slug: Web/API/VirtualKeyboard_API
l10n:
  sourceCommit: cc41ecd796870c2b6c77ad0b04fcb8d8c7d877d2
---

{{SeeCompatTable}}{{DefaultAPISidebar("VirtualKeyboard API")}}{{securecontext_header}}

Die VirtualKeyboard-API bietet Entwicklern die Möglichkeit, die Anordnung ihrer Anwendungen zu steuern, wenn die virtuelle Bildschirmtastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten erscheint oder verschwindet, auf denen möglicherweise keine Hardware-Tastatur verfügbar ist.

Webbrowser verarbeiten virtuelle Tastaturen normalerweise selbstständig, indem sie die Höhe des Viewports anpassen und bei Fokussierung zu Eingabefeldern scrollen.

Die Abbildung unten verdeutlicht den Unterschied in der Viewport-Höhe und der Scroll-Position auf einer Webseite, wenn die Bildschirmtastatur des Geräts ausgeblendet ist und wenn sie angezeigt wird.

![Zwei Geräte, eines ohne virtuelle Tastatur, das zeigt, dass die Webseite den größten Teil des vertikalen Raums des Geräts nutzen kann, und eines mit virtueller Tastatur, das zeigt, dass die Webseite nur im verbleibenden Raum angezeigt werden kann](viewport-height.png)

Komplexere Anwendungen oder spezielle Geräte wie Mobiltelefone mit mehreren Bildschirmen erfordern möglicherweise mehr Kontrolle über das Layout, wenn die virtuelle Tastatur erscheint.

Die Abbildung unten zeigt, was auf einem Gerät mit zwei Bildschirmen passiert, wenn die virtuelle Tastatur nur auf einem der beiden Bildschirme erscheint. Der Viewport wird auf beiden Bildschirmen kleiner, um Platz für die virtuelle Tastatur zu schaffen, wodurch auf dem Bildschirm, auf dem die virtuelle Tastatur nicht angezeigt wird, ungenutzter Raum bleibt.

![Ein Gerät mit zwei Bildschirmen, mit der virtuellen Tastatur auf einem Bildschirm angezeigt, das zeigt, dass die Webseite nur den vertikalen Raum nutzen kann, der nach dem Anzeigen der Tastatur verblieben ist, auch wenn dies leeren Raum auf dem anderen Bildschirm hinterlässt](dual-screen.png)

Die VirtualKeyboard-API kann verwendet werden, um die automatische Behandlung der virtuellen Tastatur durch den Browser zu umgehen und stattdessen die vollständige Kontrolle zu übernehmen. Mit der VirtualKeyboard-API erscheint und verschwindet die Tastatur weiterhin, wenn Formularelemente fokussiert sind, aber der Viewport ändert sich nicht, und Sie können JavaScript und CSS verwenden, um Ihr Layout anzupassen.

## Konzept

Die VirtualKeyboard-API besteht aus drei Teilen:

- Die [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard)-Schnittstelle, die über [`navigator.virtualKeyboard`](/de/docs/Web/API/Navigator/virtualKeyboard) zugänglich ist, wird verwendet, um die automatische virtuelle Tastaturverhalten zu umgehen, die virtuelle Tastatur programmatisch anzuzeigen oder auszublenden sowie die aktuelle Position und Größe der virtuellen Tastatur zu ermitteln.
- Die `keyboard-inset-*` CSS-Umgebungsvariablen liefern Informationen über die Position und Größe der virtuellen Tastatur.
- Das Attribut [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy) gibt an, ob die virtuelle Tastatur auf `contenteditable`-Elementen erscheinen soll.

### Die automatische virtuelle Tastaturverhalten umgehen

Um die automatische virtuelle Tastaturverhalten des Browsers zu umgehen, verwenden Sie `navigator.virtualKeyboard.overlaysContent = true`. Der Browser wird dann nicht mehr automatisch den Viewport anpassen, um Platz für die virtuelle Tastatur zu schaffen, die stattdessen Ihren Inhalt überlagert.

### Die Geometrie der virtuellen Tastatur mit JavaScript erkennen

Sobald Sie das Standardverhalten des Browsers umgangen haben, können Sie die aktuelle Geometrie der virtuellen Tastatur mit `navigator.virtualKeyboard.boundingRect` ermitteln und das Layout mit CSS und JavaScript entsprechend anpassen. Zusätzlich können Sie Geometrieänderungen wie das Anzeigen oder Ausblenden der Tastatur mit dem `geometrychange`-Event erkennen.

Dies ist nützlich, um wichtige Benutzerschnittstellenelemente in dem Bereich zu positionieren, der nicht von der virtuellen Tastatur verdeckt wird.

Der unten stehende Codeausschnitt verwendet das `geometrychange`-Event, um zu erkennen, wann sich die Geometrie der virtuellen Tastatur ändert; er greift dann auf die `boundingRect`-Eigenschaft zu, um die Größe und Position der virtuellen Tastatur abzufragen:

```js
if ("virtualKeyboard" in navigator) {
  navigator.virtualKeyboard.overlaysContent = true;

  navigator.virtualKeyboard.addEventListener("geometrychange", (event) => {
    const { x, y, width, height } = event.target.boundingRect;
  });
}
```

### Die Geometrie der virtuellen Tastatur mit CSS-Umgebungsvariablen erkennen

Die VirtualKeyboard-API stellt ebenfalls folgende [CSS-Umgebungsvariablen](/de/docs/Web/CSS/env) bereit: `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width` und `keyboard-inset-height`.

Die `keyboard-inset-*` CSS-Umgebungsvariablen sind nützlich, um Ihr Layout an das Erscheinen der virtuellen Tastatur mit CSS anzupassen. Sie definieren ein Rechteck durch die Insets seiner Oberseite, rechten Seite, Unterseite und linken Seite vom Rand des Viewports. Die Variablen `width` und `height` sind ebenfalls verfügbar, wenn sie benötigt werden.

Der unten stehende Codeausschnitt verwendet die `keyboard-inset-height` CSS-Variable, um Platz für die virtuelle Tastatur unterhalb der Nachrichtenliste und dem Eingabefeld in einer chat-ähnlichen Anwendung zu reservieren. Wenn die virtuelle Tastatur ausgeblendet ist, gibt die `env()`-Funktion `0px` zurück und der `keyboard`-Rasterbereich wird ausgeblendet. Die Nachrichten und Eingabeelemente können die gesamte Höhe des Viewports einnehmen. Wenn die virtuelle Tastatur erscheint, erhält der `keyboard`-Rasterbereich die Höhe der virtuellen Tastatur.

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

### Die virtuelle Tastatur auf `contenteditable`-Elementen steuern

Standardmäßig lösen Elemente, die das [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut verwenden, ebenfalls die virtuelle Tastatur aus, wenn sie angetippt oder angeklickt werden. In bestimmten Situationen kann es wünschenswert sein, dieses Verhalten zu verhindern und stattdessen die virtuelle Tastatur nach einem anderen Ereignis anzuzeigen.

Setzen Sie das Attribut [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy) auf `manual`, um die Standardverarbeitung der virtuellen Tastatur im Browser zu verhindern, und steuern Sie es stattdessen selbst, indem Sie die `show()`- und `hide()`-Methoden der [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard)-Schnittstelle verwenden.

Der unten stehende Codeausschnitt zeigt, wie das `virtualkeyboardpolicy`-Attribut und die Methode `navigator.virtualKeyboard.show()` verwendet werden, um die virtuelle Tastatur stattdessen bei einem Doppelklick anzuzeigen:

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
  - : Bietet Funktionen, die Tastaturlayoutkarten abfragen und das Erfassen von Tastenanschlägen der physischen Tastatur umschalten.

## Erweiterungen zu anderen Schnittstellen

- [`Navigator.virtualKeyboard`](/de/docs/Web/API/Navigator/virtualKeyboard) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt eine Referenz zur [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard)-API zurück, um die Steuerung der virtuellen Bildschirmtastatur zu übernehmen.
- [`HTMLElement.virtualkeyboardpolicy`](/de/docs/Web/API/HTMLElement/virtualKeyboardPolicy) {{experimental_inline}}
  - : Ein String, der angibt, ob die Standardrichtlinie des Browsers für das Anzeigen der virtuellen Tastatur verwendet werden soll, wenn das Element fokussiert ist, oder ob das Anzeigen der virtuellen Tastatur manuell gesteuert werden soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Volle Kontrolle mit der VirtualKeyboard-API](https://developer.chrome.com/docs/web-platform/virtual-keyboard/)
