---
title: Drucken
slug: Web/CSS/CSS_media_queries/Printing
l10n:
  sourceCommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{CSSRef}}

Es kann Situationen geben, in denen Ihre Website oder Anwendung das Benutzererlebnis beim Drucken von Inhalten verbessern möchte. Es gibt mehrere mögliche Szenarien:

- Sie möchten das Layout anpassen, um die Größe und Form des Papiers zu nutzen.
- Sie möchten unterschiedliche Stile verwenden, um das Erscheinungsbild Ihrer Inhalte auf Papier zu verbessern.
- Sie möchten Bilder mit höherer Auflösung für ein besseres Ergebnis verwenden.
- Sie möchten die Benutzererfahrung des Druckens anpassen, z.B. durch das Präsentieren einer speziell formatierten Version Ihrer Inhalte, bevor der Druck beginnt.

Es kann andere Fälle geben, in denen Sie den Druckvorgang verwalten möchten, aber dies sind einige der häufigsten Szenarien. Dieser Artikel bietet Tipps und Techniken, um Ihre Webinhalte besser drucken zu können.

## Verwendung eines Druck-Stylesheets

Fügen Sie Folgendes in Ihr {{HTMLElement("head")}}-Tag ein.

```html
<link href="/path/to/print.css" media="print" rel="stylesheet" />
```

## Verwendung von Media Queries und @page zur Kontrolle gedruckter Inhalte

Sie können die CSS-At-Regel {{cssxref("@media")}} verwenden, um unterschiedliche Stile für Ihre Webseite festzulegen, wenn sie auf Papier oder als PDF gedruckt wird, im Gegensatz zur Anzeige auf dem Bildschirm. Der `print`-[Medientyp](/de/docs/Web/CSS/@media#media_types) legt die Stile für Druckmedien fest; diese Stile werden nur für gedruckte Inhalte verwendet.

Fügen Sie dies am Ende Ihres Stylesheets hinzu. Beachten Sie, dass [Spezifität](/de/docs/Web/CSS/Specificity) und Vorrangregeln weiterhin gelten:

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

Sie können auch die {{cssxref("@page")}}-At-Regel verwenden, um unterschiedliche Aspekte der gedruckten Seiten zu modifizieren, einschließlich der Abmessungen, Ausrichtung und Ränder der Seite. Die `@page`-Regel kann verwendet werden, um alle Seiten eines Ausdrucks oder nur einen bestimmten Teil der Seiten zu beeinflussen.

## Erkennung von Druckanforderungen

Browser senden [`beforeprint`](/de/docs/Web/API/Window/beforeprint_event)- und [`afterprint`](/de/docs/Web/API/Window/afterprint_event)-Ereignisse, um festzustellen, wann ein Druckvorgang möglicherweise stattgefunden hat. Sie können dies nutzen, um die Benutzeroberfläche anzupassen, die während des Druckens angezeigt wird (z. B. das Ein- oder Ausblenden von Benutzeroberflächenelementen während des Druckprozesses).

## Beispiele

Hier sind einige häufige Beispiele.

### Fenster automatisch schließen, wenn der Druckvorgang abgeschlossen ist

Das folgende Beispiel schließt das Fenster, nachdem der Benutzer dessen Inhalte gedruckt hat:

```js
window.addEventListener("afterprint", () => self.close);
```

### Externe Seite drucken, ohne sie zu öffnen

Wenn Sie eine externe Seite drucken möchten, ohne sie zu öffnen, können Sie ein verstecktes {{HTMLElement("iframe")}} verwenden (siehe: [HTMLIFrameElement](/de/docs/Web/API/HTMLIFrameElement)), das automatisch entfernt wird, nachdem der Benutzer dessen Inhalte gedruckt hat. Das folgende Beispiel druckt eine Datei namens `externalPage.html`:

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
- [`beforeprint`](/de/docs/Web/API/Window/beforeprint_event)-Ereignis
- [`afterprint`](/de/docs/Web/API/Window/afterprint_event)-Ereignis
- [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- {{cssxref("@media")}}
- [Modul für CSS-Paginierte Medien](/de/docs/Web/CSS/CSS_paged_media)
