---
title: Drucken
slug: Web/CSS/CSS_media_queries/Printing
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Es kann vorkommen, dass Ihre Website oder Anwendung die Benutzererfahrung beim Drucken von Inhalten verbessern möchte. Es gibt mehrere mögliche Szenarien:

- Sie möchten das Layout anpassen, um die Größe und Form des Papiers optimal zu nutzen.
- Sie möchten unterschiedliche Stile verwenden, um das Erscheinungsbild Ihrer Inhalte auf Papier zu verbessern.
- Sie möchten hochauflösendere Bilder verwenden, um ein besseres Ergebnis zu erzielen.
- Sie möchten die Benutzererfahrung beim Drucken anpassen, z. B. indem Sie eine speziell formatierte Version Ihrer Inhalte präsentieren, bevor der Druck beginnt.

Es kann auch andere Fälle geben, in denen Sie den Druckprozess verwalten möchten, aber dies sind einige der häufigsten Szenarien. Dieser Artikel bietet Tipps und Techniken, um Ihre Webinhalte besser drucken zu können.

## Verwenden eines Druck-Stylesheets

Fügen Sie das Folgende zu Ihrem {{HTMLElement("head")}}-Tag hinzu.

```html
<link href="/path/to/print.css" media="print" rel="stylesheet" />
```

## Verwenden von Media Queries und @page zur Steuerung gedruckter Inhalte

Sie können die CSS-At-Regel {{cssxref("@media")}} verwenden, um für Ihre Webseite unterschiedliche Stile festzulegen, wenn sie auf Papier oder als PDF gedruckt wird, im Gegensatz zur Anzeige auf dem Bildschirm. Der `print` [Medientyp](/de/docs/Web/CSS/@media#media_types) legt die Stile für gedruckte Medien fest; diese Stile werden nur für gedruckte Inhalte verwendet.

Fügen Sie dies am Ende Ihres Stylesheets hinzu. Beachten Sie, dass [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) und Vorrangregeln weiterhin gelten:

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

Sie können auch die At-Regel {{cssxref("@page")}} verwenden, um verschiedene Aspekte gedruckter Seiten zu ändern, einschließlich der Abmessungen, Ausrichtung und Ränder der Seite. Die `@page`-At-Regel kann verwendet werden, um alle Seiten eines Ausdrucks oder nur einen bestimmten Seitenbereich zu zielgerichtet zu ändern.

## Erkennen von Druckanforderungen

Browser senden [`beforeprint`](/de/docs/Web/API/Window/beforeprint_event) und [`afterprint`](/de/docs/Web/API/Window/afterprint_event) Ereignisse, um festzustellen, wann ein Druckvorgang stattgefunden haben könnte. Sie können dies verwenden, um die Benutzeroberfläche während des Druckens anzupassen (zum Beispiel um Benutzeroberflächenelemente während des Druckprozesses ein- oder auszublenden).

## Beispiele

Hier sind einige gängige Beispiele.

### Fenster nach dem Drucken automatisch schließen

Das folgende Beispiel schließt das Fenster, nachdem der Benutzer seinen Inhalt gedruckt hat:

```js
window.addEventListener("afterprint", () => self.close);
```

### Eine externe Seite drucken, ohne sie zu öffnen

Wenn Sie die Möglichkeit haben möchten, eine externe Seite zu drucken, ohne sie zu öffnen, können Sie ein verstecktes {{HTMLElement("iframe")}} verwenden (siehe: [HTMLIFrameElement](/de/docs/Web/API/HTMLIFrameElement)), das nach dem Drucken seiner Inhalte automatisch entfernt wird. Das folgende Beispiel zeigt, wie eine Datei namens `externalPage.html` gedruckt wird:

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
- [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- {{cssxref("@media")}}
- [CSS-Seitenmedien](/de/docs/Web/CSS/CSS_paged_media) Modul
