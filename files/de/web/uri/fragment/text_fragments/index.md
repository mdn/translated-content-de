---
title: Textfragmente
slug: Web/URI/Fragment/Text_fragments
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{QuickLinksWithSubpages("/de/docs/Web/URI")}}

**Textfragmente** ermöglichen es, direkt auf einen bestimmten Teil eines Textes in einem Webdokument zu verlinken, ohne dass der Autor ihn mit einer ID versehen muss, indem eine spezielle Syntax im URL-Fragment verwendet wird. Unterstützende Browser können frei entscheiden, wie sie auf den verlinkten Text aufmerksam machen, z.B. durch eine Farbmarkierung und/oder Scrollen zum Inhalt auf der Seite. Dies ist nützlich, da es Webinhaltsautoren ermöglicht, tief in andere Inhalte zu verlinken, die sie nicht kontrollieren, ohne auf die Anwesenheit von IDs angewiesen zu sein. Aufbauend auf dieser Grundlage könnte es verwendet werden, um effektivere Inhaltsfreigabelinks für Benutzer zu erstellen, die sie untereinander weitergeben.

## Konzepte und Verwendung

Historisch gesehen war eine der Schlüsselmerkmale des Webs schon immer seine Fähigkeit, Verbindungen zwischen verschiedenen Dokumenten bereitzustellen — es ist das, was das _Web_ zu einem Netz macht:

- Sie können an die Spitze eines Dokuments verlinken, indem Sie auf dessen URL verweisen, zum Beispiel:
  - [https://developer.mozilla.org/de/docs/Web/HTML/Element/a](/de/docs/Web/HTML/Element/a).
- Sie können auf einen bestimmten Abschnitt eines Dokuments verlinken, indem Sie auf dessen URL plus das _Dokumentfragment_ (ID) dieses Abschnitts verweisen, zum Beispiel:
  - [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#browser_compatibility](/de/docs/Web/HTML/Element/a#browser_compatibility).

Das Problem bei der Verlinkung zu spezifischen Dokumentfragmenten besteht darin, dass der Autor der verlinkten Seite einen Anker erstellen muss, um tatsächlich darauf verlinken zu können. Das zweite Beispiel oben verlinkt auf ein {{htmlelement("Heading_Elements", "h2")}}-Element mit der ID `browser_compatibility`:

```html
<h2 id="browser_compatibility">
  <a href="#browser_compatibility">Browser compatibility</a>
</h2>
```

Wenn die ID geändert oder entfernt wird, wird das Dokumentfragment ignoriert und der Link führt einfach an die Spitze der Seite. Dies ist im Sinne einer sanften Verschlechterung vernünftig, aber es wäre wohl besser, wenn der Autor des Links die volle Kontrolle darüber hätte, wohin sie verlinken, ohne auf den Seitenautor angewiesen zu sein.

**Textfragmente** machen dies möglich — sie erlauben es Linkautoren, Textinhalte statt Dokumentfragmente anzugeben, zu denen verlinkt werden soll, in einer flexiblen Weise.

## Syntax

Ähnlich wie bei Dokumentfragmenten werden Textfragmente nach einem Rautezeichen (`#`) an eine URL angehängt. Die Syntax ist jedoch etwas anders:

```url
https://example.com#:~:text=[prefix-,]textStart[,textEnd][,-suffix]
```

Die wichtigsten Teile, die man verstehen sollte, sind wie folgt:

- `:~:`
  - : Auch bekannt als _das Fragment-Direktiv_, diese Zeichenfolge teilt dem Browser mit, dass das, was als Nächstes kommt, eine oder mehrere Benutzeragenten-Anweisungen sind, die während des Ladens aus der URL entfernt werden, sodass Autorenskripte nicht direkt mit ihnen interagieren können. Benutzeragenten-Anweisungen werden auch als Direktiven bezeichnet.
- `text=`
  - : Eine Textdirektive. Dies stellt dem Browser ein Textfragment zur Verfügung, das definiert, auf welchen Text im verlinkten Dokument verwiesen werden soll.
- `textStart`
  - : Eine Textzeichenfolge, die den Anfang des verlinkten Textes angibt.
- `textEnd` {{optional_inline}}
  - : Eine Textzeichenfolge, die das Ende des verlinkten Textes angibt.
- `prefix-` {{optional_inline}}
  - : Eine Textzeichenfolge, gefolgt von einem Bindestrich, die angibt, welcher Text dem verlinkten Text sofort vorangehen soll, wobei nur Leerraum dazwischen zulässig ist. Dies hilft dem Browser, den richtigen verlinkten Text auszuwählen, in Fällen, in denen es mehrere Übereinstimmungen gibt.
- `-suffix` {{optional_inline}}
  - : Ein Bindestrich, gefolgt von einer Textzeichenfolge, die angibt, welcher Text dem verlinkten Text sofort folgen soll, wobei nur Leerraum dazwischen zulässig ist. Dies hilft dem Browser, den richtigen verlinkten Text auszuwählen, in Fällen, in denen es mehrere Übereinstimmungen gibt.

Unterstützende Browser scrollen zum ersten Textfragment im verlinkten Dokument, das der angegebenen Direktive entspricht, und heben es hervor. Beachten Sie, dass es möglich ist, mehrere Textfragmente im selben URL anzugeben, indem sie durch Ampersand-Zeichen (`&`) getrennt werden.

### Verwendungsnotizen

- Textzeichenfolgen, die für die Werte `textStart`, `textEnd`, `prefix-` und `-suffix` verwendet werden, müssen [prozentkodiert](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) sein.
- Übereinstimmungen sind nicht case-sensitiv.
- Einzelne `textStart`, `textEnd`, `prefix-` und `-suffix`-Zeichenfolgen müssen sich vollständig innerhalb desselben [Block-Elementes](/de/docs/Glossary/Block-level_content) befinden, aber vollständige Übereinstimmungen können sich über mehrere Elementgrenzen erstrecken.
- Aus Sicherheitsgründen erfordert die Funktion, dass Links in einem noopener-Kontext geöffnet werden — Sie müssen `rel="noopener"` zu Ihren {{htmlelement("a")}}-Elementen hinzufügen und `noopener` zu Ihren [`window.open()`](/de/docs/Web/API/Window/open)-Aufrufen hinzufügen, wenn Sie diese Funktion verwenden.
- Textfragmente werden nur bei vollständigen (nicht auf derselben Seite befindlichen), benutzerinitiierten Navigationen aktiviert.
- Textfragmente werden nur auf den Hauptframe angewendet; Text wird nicht innerhalb von {{htmlelement("iframe")}}s durchsucht, und `iframe`-Navigation wird kein Textfragment aktivieren.
- Für Websites, die sich abmelden möchten, unterstützen auf Chromium basierende Browser einen [Document Policy](https://wicg.github.io/document-policy/)-Headerwert, den sie senden können, sodass Benutzeragenten keine Textfragmente verarbeiten:

  ```http
  Document-Policy: force-load-at-top
  ```

> [!NOTE]
> Wenn das bereitgestellte Textfragment mit keinem Text im verlinkten Dokument übereinstimmt oder wenn der Browser Textfragmente nicht unterstützt, wird das gesamte Textfragment ignoriert und die obere Seite des Dokuments wird verlinkt.

## Beispiele

### Einfaches Textfragment mit textStart

- [https://example.com#:~:text=for](https://example.com#:~:text=for) scrollt zu und hebt die erste Instanz des Textes `for` im Dokument hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=human](/de/docs/Web/HTML/Element/a#:~:text=human) scrollt zu und hebt die erste Instanz des Textes `human` im Dokument hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL](/de/docs/Web/HTML/Element/a#:~:text=linked%20URL) scrollt zu und hebt die erste Instanz des Textes `linked URL` im Dokument hervor.

### textStart und textEnd

- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=human,URL](/de/docs/Web/HTML/Element/a#:~:text=human,url) scrollt zu und hebt die erste Instanz einer Textzeichenfolge hervor, die mit `human` beginnt und mit `URL` endet.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,defining%20a%20value](/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,defining%20a%20value) scrollt zu und hebt die erste Instanz einer Textzeichenfolge hervor, die mit `linked URL` beginnt und mit `defining a value` endet. Beachten Sie, wie der hervorgehobene Text sich über mehrere Block-Elemente erstreckt.

### Beispiele mit prefix- und/oder -suffix

- [https://example.com#:~:text=asking-,for](https://example.com#:~:text=asking-,for) scrollt zu und hebt das zweite Vorkommen des Textes `for` im Dokument hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=sent-,referrer](/de/docs/Web/HTML/Element/a#:~:text=sent-,referrer) scrollt zu und hebt das erste Vorkommen des Textes `referrer` hervor, das direkt davor den Text `sent` hat. Dies ist die 5. Instanz von `referrer` im Dokument; ohne den Präfix würde die erste Instanz hervorgehoben.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format](/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format) scrollt zu und hebt die erste Instanz des Textes `linked URL` hervor, die direkt danach den Text `'s format` hat. Dies ist die 5. Instanz von `linked URL` im Dokument; ohne das Suffix würde die erste Instanz hervorgehoben.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=downgrade:-,The%20Referer,be%20sent,-to%20origins](/de/docs/Web/HTML/Element/a#:~:text=downgrade:-,The%20Referer,be%20sent,-to%20origins) scrollt zu und hebt die Instanz des Textes `The Referer ... be sent` hervor, die durch `downgrade:` vorangestellt und durch `to origins` gefolgt wird. Dies veranschaulicht ein komplexeres Beispiel, bei dem der Präfix/Suffix verwendet wird, um die spezifische Textinstanz zu finden, auf die Sie verlinken möchten. Versuchen Sie, zum Beispiel den Präfix zu entfernen und zu sehen, was übereinstimmt.

### URLs mit mehreren Textfragmenten

Sie können mehrere Textfragmente angeben, die im selben URL markiert werden sollen, indem sie durch Ampersand-Zeichen (`&`) getrennt werden. Schauen wir uns ein paar Beispiele an:

- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=Causes&text=linked](/de/docs/Web/HTML/Element/a#:~:text=causes&text=linked) scrollt zu und hebt die ersten Vorkommen der Textzeichenfolgen `Causes` und `linked` hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format&text=Deprecated-,attributes,attribute](/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format&text=Deprecated-,attributes,attribute) scrollt zu und hebt zwei Textinstanzen hervor:
  - Die erste Instanz des Textes `linked URL`, die direkt danach den Text `'s format` hat.
  - Die erste Instanz einer Textzeichenfolge, die mit `attributes` beginnt und mit `attribute` endet, die durch `Deprecated` vorangestellt ist.

Wenn Sie eines oder mehrere Ihrer Textfragmente nicht hervorgehoben sehen und sicher sind, dass die Syntax korrekt ist, heben Sie möglicherweise eine andere Instanz hervor, als die, die Sie erwartet haben. Es könnte hervorgehoben, aber außerhalb des Bildschirms sein.

### Stil von markierten Textfragmenten

Browser sind frei, den hervorgehobenen Text auf beliebige Standardweise zu formatieren. Das [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo/#selectordef-target-text) definiert ein Pseudo-Element, {{cssxref("::target-text")}}, mit dem Sie eine benutzerdefinierte Gestaltung festlegen können.

Beispielsweise haben wir in unserem [scroll-to-text-Demo](https://mdn.github.io/css-examples/target-text/index.html#:~:text=From%20the%20foregoing%20remarks%20we%20may%20gather%20an%20idea%20of%20the%20importance) das folgende CSS:

```css
::target-text {
  background-color: rebeccapurple;
  color: white;
}
```

Versuchen Sie, den obigen Link in einem unterstützenden Browser zu folgen, um die Wirkung zu sehen, die dies hat.

### Erkennbarkeit der Funktion

Das [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)-Objekt, das über die [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective)-Eigenschaft zugegriffen wird, kann verwendet werden, um zu testen, ob Textfragmente in einem Browser unterstützt werden oder nicht.

Versuchen Sie, das folgende in den Entwickler-Tools eines unterstützenden Browsers in einem Tab mit einem oder mehreren übereinstimmenden Textfragmenten auszuführen:

```js
document.fragmentDirective;
// returns an empty FragmentDirective object, if supported
// undefined otherwise
```

Diese Funktionalität ist derzeit hauptsächlich für die Funktionsbestimmung gedacht. In Zukunft könnte das `FragmentDirective`-Objekt zusätzliche Informationen beinhalten.

## Referenz

### API

- [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)
  - : Ein Objekt, das die Textfragmente darstellt. Zurzeit leer und hauptsächlich für die Funktionsbestimmung gedacht.
- [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective)
  - : Gibt die [`FragmentDirective`](/de/docs/Web/API/FragmentDirective) für das aktuelle Dokument zurück.

### CSS

- {{cssxref("::target-text")}}
  - : Repräsentiert die hervorgehobenen Textfragmente im aktuellen Dokument. Es ermöglicht es Autoren, das Styling von Textfragmenten anzupassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Boldly link where no one has linked before: Text Fragments](https://web.dev/articles/text-fragments)
