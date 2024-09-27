---
title: VirtualKeyboard API
slug: Web/API/VirtualKeyboard_API
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{SeeCompatTable}}{{DefaultAPISidebar("VirtualKeyboard API")}}{{securecontext_header}}

Die VirtualKeyboard-API bietet Entwicklern die Möglichkeit, das Layout ihrer Anwendungen zu steuern, wenn die virtuelle Bildschirmtastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten, bei denen keine Hardware-Tastatur verfügbar ist, angezeigt oder ausgeblendet wird.

Webbrowser kümmern sich normalerweise selbst um virtuelle Tastaturen, indem sie die Höhe des Ansichtsfensters anpassen und beim Fokussieren auf Eingabefelder scrollen.

Die folgende Abbildung zeigt den Unterschied in der Höhe des Ansichtsfensters und der Scroll-Position auf einer Webseite, wenn die virtuelle Bildschirmtastatur des Geräts ausgeblendet ist und wenn sie angezeigt wird.

![Zwei Geräte, eines ohne virtuelle Tastatur, das zeigt, dass die Webseite fast den gesamten vertikalen Raum des Geräts nutzen kann, und eines mit virtueller Tastatur, das zeigt, dass die Webseite nur im verbleibenden Raum angezeigt werden kann](viewport-height.png)

Komplexere Anwendungen oder spezielle Geräte wie Mehrfachbildschirm-Mobiltelefone erfordern möglicherweise mehr Kontrolle über das Layout, wenn die virtuelle Tastatur erscheint.

Die folgende Abbildung zeigt, was auf einem Dual-Screen-Gerät passiert, wenn die virtuelle Tastatur nur auf einem der beiden Bildschirme angezeigt wird. Das Ansichtsfenster wird auf beiden Bildschirmen kleiner, um Platz für die virtuelle Tastatur zu schaffen, was zu verschwendetem Raum auf dem Bildschirm führt, auf dem die virtuelle Tastatur nicht angezeigt wird.

![Ein Dual-Screen-Gerät mit angezeigter virtueller Tastatur auf einem Bildschirm, das zeigt, dass die Webseite nur den vertikalen Raum nutzen kann, der nach Anzeige der Tastatur übrig bleibt, selbst wenn auf dem anderen Bildschirm leere Flächen verbleiben](dual-screen.png)

Die VirtualKeyboard-API kann verwendet werden, um sich von der automatischen Behandlung durch den Browser abzumelden und stattdessen die volle Kontrolle zu übernehmen. Mit der VirtualKeyboard-API erscheint und verschwindet die Tastatur weiterhin bei Bedarf, wenn Formularelemente fokussiert werden, aber das Ansichtsfenster ändert sich nicht, und Sie können JavaScript und CSS verwenden, um Ihr Layout anzupassen.

## Konzept

Die VirtualKeyboard-API besteht aus drei Teilen:

- Das [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard)-Interface, das über [`navigator.virtualKeyboard`](/de/docs/Web/API/Navigator/virtualKeyboard) zugegriffen wird, wird verwendet, um sich von dem automatischen Verhalten der virtuellen Tastatur abzumelden, die virtuelle Tastatur programmgesteuert anzuzeigen oder auszublenden, sowie um die aktuelle Position und Größe der virtuellen Tastatur zu erhalten.
- Die `keyboard-inset-*` CSS-Umgebungsvariablen liefern Informationen über die Position und Größe der virtuellen Tastatur.
- Das [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy)-Attribut gibt an, ob die virtuelle Tastatur auf `contenteditable`-Elementen erscheinen soll.

### Abmeldung vom automatischen Verhalten der virtuellen Tastatur

Um sich vom automatischen Verhalten der virtuellen Tastatur des Browsers abzumelden, verwenden Sie `navigator.virtualKeyboard.overlaysContent = true`. Der Browser wird das Ansichtsfenster nicht mehr automatisch verkleinern, um Platz für die virtuelle Tastatur zu schaffen, die stattdessen Ihren Inhalt überlagert.

### Erkennen der Geometrie der virtuellen Tastatur mit JavaScript

Sobald Sie sich vom Standardverhalten des Browsers abgemeldet haben, können Sie die aktuelle Geometrie der virtuellen Tastatur mit `navigator.virtualKeyboard.boundingRect` abrufen und das Layout entsprechend mit CSS und JavaScript anpassen. Sie können außerdem Änderungen der Geometrie, z. B. wenn die Tastatur angezeigt oder ausgeblendet wird, mit dem `geometrychange`-Ereignis überwachen.

Dies ist nützlich, um wichtige UI-Elemente in dem Bereich zu positionieren, der nicht von der virtuellen Tastatur überdeckt ist.

Der folgende Codeausschnitt verwendet das `geometrychange`-Ereignis, um zu erkennen, wenn sich die Geometrie der virtuellen Tastatur ändert; er greift anschließend auf die `boundingRect`-Eigenschaft zu, um die Größe und Position der virtuellen Tastatur abzufragen:

```js
if ("virtualKeyboard" in navigator) {
  navigator.virtualKeyboard.overlaysContent = true;

  navigator.virtualKeyboard.addEventListener("geometrychange", (event) => {
    const { x, y, width, height } = event.target.boundingRect;
  });
}
```

### Erkennen der Geometrie der virtuellen Tastatur mit CSS-Umgebungsvariablen

Die VirtualKeyboard-API stellt auch die folgenden [CSS-Umgebungsvariablen](/de/docs/Web/CSS/env) bereit: `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width` und `keyboard-inset-height`.

Die `keyboard-inset-*` CSS-Umgebungsvariablen sind nützlich, um Ihr Layout mit CSS an das Erscheinen der virtuellen Tastatur anzupassen. Sie definieren ein Rechteck durch seine oberen, rechten, unteren und linken Einzüge vom Rand des Ansichtsfensters. Die Variablen `width` und `height` sind ebenfalls verfügbar, falls erforderlich.

Der folgende Codeausschnitt verwendet die `keyboard-inset-height` CSS-Variable, um Platz für das Erscheinen der virtuellen Tastatur unterhalb der Nachrichtenliste und des Eingabefelds in einer chatähnlichen Anwendung zu reservieren. Wenn die virtuelle Tastatur ausgeblendet ist, gibt die Funktion `env()` `0px` zurück und der `keyboard`-Rasterbereich ist verborgen. Die Nachrichten- und Eingabeelemente können die gesamte Höhe des Ansichtsfensters einnehmen. Wenn die virtuelle Tastatur erscheint, erhält der `keyboard`-Rasterbereich die Höhe der virtuellen Tastatur.

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

### Steuerung der virtuellen Tastatur auf `contenteditable`-Elementen

Standardmäßig lösen Elemente mit dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut ebenfalls die virtuelle Tastatur aus, wenn sie angetippt oder angeklickt werden. In bestimmten Situationen kann es wünschenswert sein, dieses Verhalten zu verhindern und stattdessen die virtuelle Tastatur nach einem anderen Ereignis anzuzeigen.

Setzen Sie das [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy)-Attribut auf `manual`, um die Standardbehandlung der virtuellen Tastatur im Browser zu verhindern und diese stattdessen selbst zu steuern, indem Sie die `show()`- und `hide()`-Methoden des [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard)-Interfaces verwenden.

Der folgende Codeausschnitt zeigt, wie man das `virtualkeyboardpolicy`-Attribut und die `navigator.virtualKeyboard.show()`-Methode nutzt, um stattdessen die virtuelle Tastatur bei einem Doppelklick anzuzeigen:

```html
<div contenteditable virtualkeyboardpolicy="manual" id="editor"></div>
<script>
  if ("virtualKeyboard" in navigator) {
    navigator.virtualKeyboard.overlaysContent = true;

    const editor = document.getElementById("editor");
    editor.addEventListener("dblclick", () => {
      navigator.virtualKeyboard.show();
    });
  }
</script>
```

## Schnittstellen

- [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard) {{experimental_inline}}
  - : Bietet Funktionen, die Tastaturlayoutkarten abrufen und das Erfassen von Tastenanschlägen von der physischen Tastatur umschalten.

## Erweiterungen zu anderen Schnittstellen

- [`Navigator.virtualKeyboard`](/de/docs/Web/API/Navigator/virtualKeyboard) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt eine Referenz zur [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard)-API zurück, um die Kontrolle über die virtuelle Bildschirmtastatur zu übernehmen.
- [`HTMLElement.virtualkeyboardpolicy`](/de/docs/Web/API/HTMLElement/virtualkeyboardpolicy) {{experimental_inline}}
  - : Ein String, der angibt, ob die Standardrichtlinie des Browsers zur Anzeige der virtuellen Tastatur verwendet werden soll, wenn das Element fokussiert wird, oder ob die Anzeige der virtuellen Tastatur manuell gehandhabt werden soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Volle Kontrolle mit der VirtualKeyboard-API](https://developer.chrome.com/docs/web-platform/virtual-keyboard/)
