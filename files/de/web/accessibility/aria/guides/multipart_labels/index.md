---
title: "Mehrteilige Bezeichnungen: Verwenden von ARIA für Bezeichnungen mit eingebetteten Feldern"
short-title: ARIA für Bezeichnungen mit eingebetteten Feldern
slug: Web/Accessibility/ARIA/Guides/Multipart_labels
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

## Problem

Sie haben ein Formular, in dem Sie Ihrem Benutzer eine Frage stellen, deren Antwort in der Frage selbst enthalten ist. Ein klassisches Beispiel, das wir alle aus unseren Browser-Einstellungen kennen, ist die Einstellung "Verlauf nach x Tagen löschen". "Verlauf löschen nach" steht links vom Textfeld, x ist die Zahl, zum Beispiel 21, und das Wort "Tage" folgt dem Textfeld, wodurch ein Satz entsteht, der leicht zu verstehen ist.

Wenn Sie einen Screenreader verwenden, haben Sie bemerkt, dass, wenn Sie zu dieser Einstellung in Firefox gehen, es Ihnen sagt: "Löschen Sie den Verlauf nach 21 Tagen"? Es folgt die Ansage, dass Sie sich in einem Textfeld befinden, das die Zahl 21 enthält. Ist das nicht cool? Sie müssen nicht herumnavigieren, um die Einheit herauszufinden. "Tage" könnte leicht "Monate" oder "Jahre" sein, und in vielen gewöhnlichen Dialogen gibt es keine Möglichkeit, dies herauszufinden, außer durch Herumnavigieren mit Bildschirmüberprüfungsbefehlen.

Die Lösung liegt in einem ARIA-Attribut namens `aria-labelledby`. Sein Parameter ist eine Zeichenkette, die aus den IDs der HTML-Elemente besteht, die Sie zu einem einzigen zugänglichen Namen verketten möchten.

Sowohl `aria-labelledby` als auch `aria-describedby` werden auf dem Formularelement angegeben, das bezeichnet werden soll, zum Beispiel einem `<input>`. In beiden Fällen werden die label for/label control Zuordnungen, die möglicherweise auch existieren, durch `aria-labelledby` überschrieben. Wenn Sie auf einer HTML-Seite `aria-labelledby` bereitstellen, sollten Sie auch eine label for-Konstruktion bereitstellen, um auch ältere Browser zu unterstützen, die noch keine ARIA-Unterstützung haben. Mit Firefox 3 erhalten Ihre sehbehinderten Benutzer automatisch eine bessere Zugänglichkeit durch das neue Attribut, aber die Benutzer älterer Browser sind auf diese Weise nicht im Nachteil.

### Beispiel

{{ EmbedLiveSample("Example") }}

```css hidden
body {
  margin: 1rem;
}
```

```html
<input
  aria-labelledby="labelShutdown shutdownTime shutdownUnit"
  type="checkbox" />

<span id="labelShutdown">Shut down computer after</span>

<input
  aria-labelledby="labelShutdown shutdownTime shutdownUnit"
  id="shutdownTime"
  type="text"
  value="10" />

<span id="shutdownUnit"> minutes</span>
```

## Ein Hinweis für JAWS 8-Nutzer

JAWS 8.0 hat seine eigene Logik, um Bezeichnungen zu finden, wodurch der `accessibleName`, den das Textfeld eines HTML-Dokuments erhält, immer überschrieben wird. Mit JAWS 8 habe ich keinen Weg gefunden, es dazu zu bringen, die Bezeichnung aus dem obigen Beispiel zu akzeptieren. Aber NVDA und Window-Eyes tun dies einwandfrei, und auch Orca unter Linux hat keine Probleme.

> [!NOTE]
> TBD: Weitere Kompatibilitätsinformationen hinzufügen

## Kann das ohne ARIA gemacht werden?

Community-Mitglied Ben Millard hat in einem Blog-Post darauf hingewiesen, dass [Steuerelemente in Bezeichnungen eingebettet werden können, wie im obigen Beispiel mit HTML 4 gezeigt](https://projectcerbera.com/blog/2008/03/#day24), indem das Eingabefeld in das Label eingebettet wird. Vielen Dank für diese Information, Ben! Sie ist sehr nützlich und zeigt, dass einige Techniken, die seit Jahren verfügbar sind, selbst den Gurus manchmal entgehen. Diese Technik funktioniert in Firefox; allerdings funktioniert sie derzeit in vielen anderen Browsern nicht, einschließlich IE. Für Bezeichnungen mit eingebetteten Formularelementen ist die Verwendung von `aria-labelledby` immer noch der beste Ansatz.
