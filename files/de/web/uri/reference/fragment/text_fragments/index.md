---
title: Textfragmente
slug: Web/URI/Reference/Fragment/Text_fragments
l10n:
  sourceCommit: a267b5378025c50bd722e90c6a1969c41bb80bb1
---

**Textfragmente** verlinken direkt auf bestimmten Text auf einer Webseite, ohne dass der Seitenautor eine ID hinzufügen muss. Sie verwenden eine spezielle Syntax im URL-Fragment. Diese Funktion ermöglicht es Ihnen, Deep Links zu Inhalten zu erstellen, die Sie nicht kontrollieren und die möglicherweise keine IDs haben. Außerdem wird das Teilen von Links nützlicher, indem andere direkt auf bestimmte Wörter verwiesen werden. Browser können unterschiedlich darstellen, wie sie auf den verlinkten Text aufmerksam machen — normalerweise wird der Text in den Blick gescrollt und farbig hervorgehoben.

## Konzepte und Nutzung

Historisch gesehen war eine der Hauptfunktionen des Webs immer die Fähigkeit, Links zwischen verschiedenen Dokumenten bereitzustellen — das ist es, was _das Web_ zu einem Netz macht:

- Sie können den Anfang eines Dokuments verlinken, indem Sie auf dessen URL verlinken, zum Beispiel:
  - [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a](/de/docs/Web/HTML/Reference/Elements/a).
- Sie können auf einen bestimmten Abschnitt eines Dokuments verlinken, indem Sie auf dessen URL plus das _Dokumentfragment_ (ID) dieses Abschnitts verlinken, zum Beispiel:
  - [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#browser_compatibility](/de/docs/Web/HTML/Reference/Elements/a#browser_compatibility).

Das Problem beim Verlinken auf bestimmte Dokumentfragmente besteht darin, dass der Autor der verlinkten Seite einen Anker bereitstellen muss, um _tatsächlich_ darauf zu verlinken. Das zweite Beispiel oben verlinkt auf ein {{htmlelement("Heading_Elements", "h2")}}-Element mit der ID `browser_compatibility`:

```html
<h2 id="browser_compatibility">
  <a href="#browser_compatibility">Browser compatibility</a>
</h2>
```

Nicht alle Dokumente haben solche Anker, und selbst wenn sie das tun, ist das Verlinken zu einer Überschrift möglicherweise viel weniger offensichtlich als das direkte Verlinken auf den spezifischen Text, den Sie zitieren. Hier kommen Textfragmente ins Spiel: Sie erlauben es dem Link-Autor, die volle Kontrolle darüber zu haben, auf welchen Text verlinkt werden soll, ohne spezielles Markup im Zieldokument zu erfordern. Beispielsweise kann eine Suchmaschine auf einen bestimmten Satz in ihren Suchergebnissen verweisen, und beim Klicken auf den Link gelangen Sie direkt zu diesem Satz.

Textfragmente haben jedoch auch eine Einschränkung: Text in einem Dokument ist weniger stabil als die Dokumentstruktur. Wenn der Text im verlinkten Dokument aktualisiert wird, stimmt das Fragment nicht mehr überein, und der Browser navigiert zum Anfang der Seite. Dies ist bei vorübergehenden Links wie in Suchergebnissen in Ordnung, aber wenn Sie beabsichtigen, dass der Link über die Zeit funktioniert, sind Dokumentfragmente möglicherweise zuverlässiger.

## Syntax

```url
https://example.com#:~:text=[prefix-,]textStart[,textEnd][,-suffix]
```

Textfragmente sind eine Art von URL-Fragment und werden nach dem `#` geschrieben. Die wichtigsten Teile sind folgende:

- `:~:`
  - : Auch bekannt als _das Fragment-Direktiv_, teilt diese Zeichenfolge dem Browser mit, dass das, was folgt, eine oder mehrere Benutzeragenten-Anweisungen sind, die während des Ladens von der URL entfernt werden, sodass Autorenskripte nicht direkt mit ihnen interagieren können. Benutzeragenten-Anweisungen werden auch Direktiven genannt.
- `text=`
  - : Eine Text-Direktive. Dies liefert ein Textfragment an den Browser, das definiert, welcher Text im verlinkten Dokument verlinkt werden soll.
- `textStart`
  - : Eine Textzeichenfolge, die den Anfang des verlinkten Textes angibt.
- `textEnd` {{optional_inline}}
  - : Eine Textzeichenfolge, die das Ende des verlinkten Textes angibt.
- `prefix-` {{optional_inline}}
  - : Eine Textzeichenfolge, gefolgt von einem Bindestrich, die angibt, welcher Text unmittelbar dem verlinkten Text vorausgehen soll, wobei nur Leerzeichen dazwischen erlaubt sind. Dies hilft dem Browser, den richtigen verlinkten Text auszuwählen, falls es mehrere Übereinstimmungen gibt.
- `-suffix` {{optional_inline}}
  - : Ein Bindestrich, gefolgt von einer Textzeichenfolge, die angibt, welcher Text unmittelbar dem verlinkten Text folgen soll, wobei nur Leerzeichen dazwischen erlaubt sind. Dies hilft dem Browser, den richtigen verlinkten Text auszuwählen, falls es mehrere Übereinstimmungen gibt.

Unterstützende Browser scrollen zum und heben das erste Textfragment im verlinkten Dokument hervor, das der angegebenen Direktive entspricht. Beachten Sie, dass es möglich ist, mehrere Textfragmente in derselben URL zu spezifizieren, indem man sie mit Ampersand (`&`)-Zeichen trennt.

### Nutzungsnotizen

- Textzeichenfolgen, die für die `textStart`, `textEnd`, `prefix-` und `-suffix` Werte verwendet werden, müssen [prozentkodiert](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) sein. Darüber hinaus erfordert [der Standard](https://wicg.github.io/scroll-to-text-fragment/#syntax), dass das URL-sichere Bindestrich-Zeichen `'-'` ähnlich prozentkodiert wird.
- Übereinstimmungen sind nicht von der Groß- und Kleinschreibung abhängig.
- Einzelne `textStart`, `textEnd`, `prefix-` und `-suffix` Zeichenfolgen müssen sich vollständig innerhalb desselben {{Glossary("Block-level_content", "Block-Level-Elements")}} befinden, aber vollständige Übereinstimmungen können sich über mehrere Elementgrenzen erstrecken.
- Aus Sicherheitsgründen sollten Sie, wenn Sie mit dieser Funktion auf eine seitenübergreifende Seite verlinken, den Link in einem `noopener`-Kontext öffnen — Sie müssen `rel="noopener"` zu Ihren {{htmlelement("a")}}-Elementen hinzufügen und `noopener` zu Ihren [`window.open()`](/de/docs/Web/API/Window/open) Aufrufen hinzufügen, wenn Sie diese Funktion verwenden.
- Textfragmente werden nur bei benutzerinitiierten Navigationen aufgerufen.
- Textfragmente gelten nur für den Hauptframe; Text wird nicht innerhalb von {{htmlelement("iframe")}}s durchsucht, und `iframe`-Navigation wird kein Textfragment aufrufen.
- Für Seiten, die sich abmelden möchten, unterstützen Chromium-basierte Browser einen [Document Policy](https://wicg.github.io/document-policy/) Header-Wert, den sie senden können, damit Benutzeragenten keine Textfragmente verarbeiten:

  ```http
  Document-Policy: force-load-at-top
  ```

> [!NOTE]
> Wenn das bereitgestellte Textfragment mit keinem Text im verlinkten Dokument übereinstimmt oder wenn der Browser Textfragmente nicht unterstützt, wird das gesamte Textfragment ignoriert und der Anfang des Dokuments verlinkt.

## Beispiele

### Textfragment mit textStart

- [https://example.com/#:~:text=use](https://example.com/#:~:text=use) scrollt und hebt die erste Instanz des Textes `use` im Dokument hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=human](/de/docs/Web/HTML/Reference/Elements/a#:~:text=human) scrollt und hebt die erste Instanz des Textes `human` im Dokument hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL](/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL) scrollt und hebt die erste Instanz des Textes `linked URL` im Dokument hervor.

### textStart und textEnd

- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=human,URL](/de/docs/Web/HTML/Reference/Elements/a#:~:text=human,url) scrollt und hebt die erste Instanz einer Textzeichenfolge hervor, die mit `human` beginnt und mit `URL` endet.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,defining%20a%20value](/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,defining%20a%20value) scrollt und hebt die erste Instanz einer Textzeichenfolge hervor, die mit `linked URL` beginnt und mit `defining a value` endet. Beachten Sie, wie sich der hervorgehobene Text über mehrere Block-Level-Elemente erstreckt.

### Beispiele mit prefix- und/oder -suffix

- [https://example.com/#:~:text=avoid-,use](https://example.com/#:~:text=avoid-,use) scrollt und hebt die zweite Instanz des Textes `use` im Dokument hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=sent-,referrer](/de/docs/Web/HTML/Reference/Elements/a#:~:text=sent-,referrer) scrollt und hebt die erste Instanz des Textes `referrer` hervor, der direkt von `sent` gefolgt wird. Dies ist die 5. Instanz von `referrer` im Dokument; ohne das Präfix würde die erste Instanz hervorgehoben werden.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,-'s%20format](/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,-'s%20format) scrollt und hebt die erste Instanz des Textes `linked URL` hervor, dem direkt `'s format` folgt. Dies ist die 5. Instanz von `linked URL` im Dokument; ohne das Suffix würde die erste Instanz hervorgehoben werden.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=downgrade%3A-,The%20Referer,be%20sent,-to%20origins](/de/docs/Web/HTML/Reference/Elements/a#:~:text=downgrade%3A-,The%20Referer,be%20sent,-to%20origins) scrollt und hebt die Instanz des Textes `The Referer ... be sent` hervor, die von `downgrade:` vorangestellt und von `to origins` gefolgt wird. Dies illustriert ein komplexeres Beispiel, bei dem Präfix/Suffix verwendet werden, um die spezifische Textinstanz zu finden, zu der Sie verlinken möchten. Versuchen Sie zum Beispiel, das Präfix zu entfernen, und sehen Sie, was übereinstimmt.

### URLs mit mehreren Textfragmenten

Sie können mehrere Textfragmente angeben, um in derselben URL hervorgehoben zu werden, indem Sie sie mit Ampersand (`&`)-Zeichen trennen. Lassen Sie uns ein paar Beispiele betrachten:

- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=Causes&text=linked](/de/docs/Web/HTML/Reference/Elements/a#:~:text=causes&text=linked) scrollt und hebt die ersten Instanzen der Textzeichenfolgen `Causes` und `linked` hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,-'s%20format&text=Deprecated-,attributes,attribute](/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,-'s%20format&text=Deprecated-,attributes,attribute) scrollt und hebt zwei Textinstanzen hervor:
  - Die erste Instanz des Textes `linked URL`, dem direkt `'s format` folgt.
  - Die erste Instanz einer Textzeichenfolge, die mit `attributes` beginnt und mit `attribute` endet, die von `Deprecated` vorangestellt wird.

Wenn Sie eines oder mehrere Ihrer Textfragmente nicht hervorgehoben sehen und sich sicher sind, dass Ihre Syntax korrekt ist, heben Sie möglicherweise einfach eine andere Instanz hervor als die erwartete. Sie könnte hervorgehoben sein, aber außerhalb des Bildschirms.

### Gestaltung von hervorgehobenen Textfragmenten

Browser sind frei, den hervorgehobenen Text auf jede Weise zu gestalten, die sie standardmäßig wählen. Das [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo/#selectordef-target-text) definiert ein Pseudo-Element, {{cssxref("::target-text")}}, das es Ihnen ermöglicht, benutzerdefinierte Stile zu spezifizieren.

Zum Beispiel haben wir in unserem [scroll-to-text Demo](https://mdn.github.io/css-examples/target-text/index.html#:~:text=From%20the%20foregoing%20remarks%20we%20may%20gather%20an%20idea%20of%20the%20importance) folgendes CSS:

```css
::target-text {
  background-color: rebeccapurple;
  color: white;
}
```

Versuchen Sie, den obigen Link in einem unterstützenden Browser zu folgen, um die Wirkung zu sehen.

### Erkennbarkeit der Funktion

Das [`FragmentDirective`](/de/docs/Web/API/FragmentDirective) Objekt, das über die [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective) Eigenschaft zugänglich ist, kann verwendet werden, um zu testen, ob Textfragmente in einem Browser unterstützt werden.

Versuchen Sie, das folgende in den Entwickler-Tools eines unterstützenden Browsers auszuführen, in einem Tab mit einem oder mehreren passenden Textfragmenten:

```js
document.fragmentDirective;
// returns an empty FragmentDirective object, if supported
// undefined otherwise
```

Diese Funktionalität ist derzeit hauptsächlich für die Erkennung von Funktionen gedacht. In Zukunft könnte das `FragmentDirective`-Objekt zusätzliche Informationen enthalten.

## Referenz

### API

- [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)
  - : Ein Objekt, das die Textfragmente repräsentiert. Zurzeit leer und hauptsächlich für die Erkennung von Funktionen gedacht.
- [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective)
  - : Gibt das [`FragmentDirective`](/de/docs/Web/API/FragmentDirective) für das aktuelle Dokument zurück.

### CSS

- {{cssxref("::target-text")}}
  - : Repräsentiert die hervorgehobenen Textfragmente im aktuellen Dokument. Es ermöglicht Autoren, die Gestaltung der Textfragmente anzupassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Boldly link where no one has linked before: Text Fragments](https://web.dev/articles/text-fragments)
