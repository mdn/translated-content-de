---
title: Drucken
slug: Web/CSS/Guides/Media_queries/Printing
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Es kann vorkommen, dass Ihre Website oder Anwendung die Benutzererfahrung beim Drucken von Inhalten verbessern möchte. Es gibt mehrere mögliche Szenarien:

- Sie möchten das Layout anpassen, um die Größe und Form des Papiers optimal zu nutzen.
- Sie möchten unterschiedliche Stile verwenden, um das Erscheinungsbild Ihrer Inhalte auf Papier zu verbessern.
- Sie möchten Bilder mit höherer Auflösung verwenden, um ein besseres Ergebnis zu erzielen.
- Sie möchten die Benutzererfahrung des Druckens anpassen, beispielsweise indem Sie eine speziell formatierte Version Ihrer Inhalte präsentieren, bevor der Druck beginnt.

Es kann auch andere Fälle geben, in denen Sie den Druckprozess verwalten möchten, aber dies sind einige der häufigsten Szenarien. Dieser Artikel bietet Tipps und Techniken, um Ihrem Webinhalt beim Drucken zu einer besseren Qualität zu verhelfen.

## Verwendung eines Druck-Stylesheets

Fügen Sie Folgendes zu Ihrem {{HTMLElement("head")}}-Tag hinzu.

```html
<link href="/path/to/print.css" media="print" rel="stylesheet" />
```

## Verwendung von Media Queries und @page zur Steuerung gedruckter Inhalte

Sie können die CSS-{{cssxref("@media")}}-Regel verwenden, um unterschiedliche Stile für Ihre Webseite festzulegen, wenn diese auf Papier oder als PDF gedruckt wird, im Vergleich zu ihrer Darstellung auf dem Bildschirm. Der Medientyp `print` setzt die Stile für gedruckte Medien; diese Stile werden nur für gedruckte Inhalte verwendet.

Fügen Sie dies am Ende Ihres Stylesheets hinzu. Beachten Sie, dass die [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) und die Vorrangregeln weiterhin gelten:

```css
@media print {
  /* All your print styles go here */
  #header,
  #footer,
  #nav {
    display: none !important;
  }
}
```

Sie können auch die {{cssxref("@page")}}-Regel verwenden, um verschiedene Aspekte gedruckter Seiten zu ändern, einschließlich der Abmessungen, Ausrichtung und Ränder der Seite. Die `@page`-Regel kann verwendet werden, um alle Seiten in einem Ausdruck oder nur eine bestimmte Teilmenge von Seiten anzusprechen.

## Erkennung von Druckanforderungen

Browser senden [`beforeprint`](/de/docs/Web/API/Window/beforeprint_event) und [`afterprint`](/de/docs/Web/API/Window/afterprint_event) Ereignisse, um festzustellen, wann ein Druckvorgang möglicherweise stattgefunden hat. Sie können dies verwenden, um die Benutzeroberfläche während des Druckvorgangs anzupassen (zum Beispiel, um Benutzeroberflächen-Elemente während des Druckvorgangs anzuzeigen oder auszublenden).

## Beispiele

Hier sind einige häufige Beispiele.

### Automatisches Schließen des Fensters am Ende

Das folgende Beispiel schließt das Fenster, nachdem der Benutzer den Inhalt gedruckt hat:

```js
window.addEventListener("afterprint", () => self.close);
```

### Drucken einer externen Seite, ohne sie zu öffnen

Wenn Sie eine externe Seite drucken möchten, ohne sie zu öffnen, können Sie ein verstecktes {{HTMLElement("iframe")}} verwenden (siehe: [HTMLIFrameElement](/de/docs/Web/API/HTMLIFrameElement)), das automatisch entfernt wird, nachdem der Benutzer seinen Inhalt gedruckt hat. Das folgende Beispiel druckt eine Datei namens `externalPage.html`:

#### HTML

```html
<button id="print_external">Print external page!</button>
```

#### JavaScript

```js
function setPrint() {
  const closePrint = () => {
    document.body.removeChild(this);
  };
  this.contentWindow.onbeforeunload = closePrint;
  this.contentWindow.onafterprint = closePrint;
  this.contentWindow.print();
}

document.getElementById("print_external").addEventListener("click", () => {
  const hideFrame = document.createElement("iframe");
  hideFrame.onload = setPrint;
  hideFrame.style.display = "none"; // hide iframe
  hideFrame.src = "external-page.html";
  document.body.appendChild(hideFrame);
});
```

## Siehe auch

- [`window.print`](/de/docs/Web/API/Window/print)
- [`beforeprint`](/de/docs/Web/API/Window/beforeprint_event) Ereignis
- [`afterprint`](/de/docs/Web/API/Window/afterprint_event) Ereignis
- [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@media")}}
- [CSS für paginierte Medien](/de/docs/Web/CSS/Guides/Paged_media) Modul
