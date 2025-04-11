---
title: Textfragmente
slug: Web/URI/Reference/Fragment/Text_fragments
l10n:
  sourceCommit: f4372ac9926fc2a1cbe408dae02b381b7f1909da
---

**Textfragmente** ermöglichen es, direkt auf einen bestimmten Textabschnitt in einem Webdokument zu verlinken, ohne dass der Autor es mit einer ID versehen muss, indem eine spezielle Syntax im URL-Fragment verwendet wird. Unterstützende Browser können frei wählen, wie sie auf den verlinkten Text aufmerksam machen, z.B. durch Hervorheben mit Farbe und/oder Scrollen zum Inhalt auf der Seite. Dies ist nützlich, da es Webinhaltsautoren ermöglicht, tief in andere Inhalte zu verlinken, die sie nicht kontrollieren, ohne auf die Präsenz von IDs angewiesen zu sein. Darüber hinaus könnte es genutzt werden, um effektivere Inhaltsfreigabelinks für Benutzer zu erstellen, die diese an andere weitergeben möchten.

## Konzepte und Verwendung

Historisch gesehen war eine der Hauptfunktionen des Webs schon immer die Möglichkeit, Verknüpfungen zwischen verschiedenen Dokumenten bereitzustellen — das macht das _Web_ zu einem Netz:

- Sie können an den Anfang eines Dokuments verlinken, indem Sie auf seine URL verlinken, zum Beispiel:
  - [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a](/de/docs/Web/HTML/Reference/Elements/a).
- Sie können auf einen bestimmten Abschnitt eines Dokuments verlinken, indem Sie auf die URL plus das _Dokumentfragment_ (ID) dieses Abschnitts verlinken, zum Beispiel:
  - [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#browser_compatibility](/de/docs/Web/HTML/Reference/Elements/a#browser_compatibility).

Das Problem beim Verlinken auf bestimmte Dokumentfragmente ist, dass der Autor der verlinkten Seite einen Anker setzen muss, um tatsächlich dahin zu verlinken. Das zweite Beispiel oben verlinkt zu einem {{htmlelement("Heading_Elements", "h2")}}-Element mit der ID `browser_compatibility`:

```html
<h2 id="browser_compatibility">
  <a href="#browser_compatibility">Browser compatibility</a>
</h2>
```

Wenn die ID geändert oder entfernt wird, wird das Dokumentfragment ignoriert und der Link verweist einfach auf den Anfang der Seite. Dies ist in Bezug auf eine sanfte Degradation angemessen, aber es wäre wohl besser, wenn der Autor des Links die volle Kontrolle darüber hätte, wohin er verlinkt, ohne auf den Seitenautor angewiesen zu sein.

**Textfragmente** machen dies möglich — sie erlauben es Linkautoren, Textinhalte anstatt von Dokumentfragmenten anzugeben, zu denen verlinkt werden soll, auf flexible Weise.

## Syntax

Ähnlich wie Dokumentfragmente werden Textfragmente nach einem Rautenzeichen (`#`) an eine URL angehängt. Die Syntax ist jedoch etwas anders:

```url
https://example.com#:~:text=[prefix-,]textStart[,textEnd][,-suffix]
```

Die wichtigsten Teile, die es zu verstehen gilt, sind:

- `:~:`
  - : Auch bekannt als _Das Fragmentdirektiv_, diese Zeichenfolge teilt dem Browser mit, dass das, was folgt, eine oder mehrere Anleitungen für Benutzeragenten sind, die während des Ladens aus der URL entfernt werden, sodass Autorenskripte nicht direkt mit ihnen interagieren können. Anleitungen für Benutzeragenten werden auch Direktiven genannt.
- `text=`
  - : Eine Textdirektive. Diese bietet dem Browser ein Textfragment an und definiert, zu welchem Text im verlinkten Dokument verlinkt werden soll.
- `textStart`
  - : Eine Zeichenkette, die den Anfang des verlinkten Textes angibt.
- `textEnd` {{optional_inline}}
  - : Eine Zeichenkette, die das Ende des verlinkten Textes angibt.
- `prefix-` {{optional_inline}}
  - : Eine Zeichenkette, gefolgt von einem Bindestrich, die angibt, welcher Text unmittelbar vor dem verlinkten Text erscheinen soll, wobei nur Leerzeichen dazwischen erlaubt sind. Dies hilft dem Browser, den richtigen verlinkten Text auszuwählen, falls mehrere Übereinstimmungen vorhanden sind.
- `-suffix` {{optional_inline}}
  - : Ein Bindestrich gefolgt von einer Zeichenkette, die angibt, welcher Text unmittelbar nach dem verlinkten Text erscheinen soll, wobei nur Leerzeichen dazwischen erlaubt sind. Dies hilft dem Browser, den richtigen verlinkten Text auszuwählen, falls mehrere Übereinstimmungen vorhanden sind.

Unterstützende Browser scrollen zu und heben das erste Textfragment im verlinkten Dokument hervor, das der angegebenen Direktive entspricht. Beachten Sie, dass es möglich ist, mehrere Textfragmente anzugeben, die in derselben URL hervorgehoben werden, indem sie mit einem Kaufmannszeichen (`&`) getrennt werden.

### Hinweise zur Nutzung

- Die für die Werte `textStart`, `textEnd`, `prefix-` und `-suffix` verwendeten Zeichenketten müssen [prozentkodiert](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) sein. Zusätzlich erfordert [der Standard](https://wicg.github.io/scroll-to-text-fragment/#syntax), dass der URL-sichere Bindestrich `'-'` ähnlich prozentkodiert wird.
- Übereinstimmungen sind nicht case-sensitiv.
- Individuelle `textStart`, `textEnd`, `prefix-` und `-suffix` Zeichenketten müssen sich vollständig innerhalb desselben {{Glossary("Block-level_content", "Block-level elements")}} befinden, aber vollständige Übereinstimmungen können sich über mehrere Elementgrenzen erstrecken.
- Aus Sicherheitsgründen erfordert die Funktion, dass Links in einem noopener-Kontext geöffnet werden — Sie müssen `rel="noopener"` zu Ihren {{htmlelement("a")}} Elementen hinzufügen und `noopener` zu Ihren [`window.open()`](/de/docs/Web/API/Window/open) Aufrufen hinzufügen, wenn Sie diese Funktion verwenden.
- Textfragmente werden nur bei von Nutzern initiierten Navigationen aufgerufen.
- Textfragmente werden nur auf den Hauptframe angewendet; Text wird nicht innerhalb von {{htmlelement("iframe")}}s gesucht, und `iframe`-Navigationen rufen kein Textfragment auf.
- Für Websites, die sich abmelden möchten, unterstützen Chromium-basierte Browser einen [Document Policy](https://wicg.github.io/document-policy/) Header-Wert, den sie senden können, damit Benutzeragenten keine Textfragmente verarbeiten:

  ```http
  Document-Policy: force-load-at-top
  ```

> [!NOTE]
> Wenn das angegebene Textfragment mit keinem Text im verlinkten Dokument übereinstimmt oder wenn der Browser Textfragmente nicht unterstützt, wird das gesamte Textfragment ignoriert und der obere Teil des Dokuments verlinkt.

## Beispiele

### Textfragment mit textStart

- [https://example.com/#:~:text=for](https://example.com/#:~:text=for) scrollt zu und hebt die erste Instanz des Textes `for` im Dokument hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=human](/de/docs/Web/HTML/Reference/Elements/a#:~:text=human) scrollt zu und hebt die erste Instanz des Textes `human` im Dokument hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL](/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL) scrollt zu und hebt die erste Instanz des Textes `linked URL` im Dokument hervor.

### textStart und textEnd

- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=human,URL](/de/docs/Web/HTML/Reference/Elements/a#:~:text=human,url) scrollt zu und hebt die erste Instanz einer Zeichenkette hervor, die mit `human` beginnt und mit `URL` endet.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,defining%20a%20value](/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,defining%20a%20value) scrollt zu und hebt die erste Instanz einer Zeichenkette hervor, die mit `linked URL` beginnt und mit `defining a value` endet. Beachten Sie, wie der hervorgehobene Text sich über mehrere Blocklevel-Elemente erstreckt.

### Beispiele mit prefix- und/oder -suffix

- [https://example.com/#:~:text=asking-,for](https://example.com/#:~:text=asking-,for) scrollt zu und hebt die zweite Instanz des Textes `for` im Dokument hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=sent-,referrer](/de/docs/Web/HTML/Reference/Elements/a#:~:text=sent-,referrer) scrollt zu und hebt die erste Instanz des Textes `referrer` hervor, die den Text `sent` direkt davor hat. Dies ist die 5. Instanz von `referrer` im Dokument; ohne das Präfix würde die erste Instanz hervorgehoben.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,-'s%20format](/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,-'s%20format) scrollt zu und hebt die erste Instanz des Textes `linked URL` hervor, die direkt danach den Text `'s format` hat. Dies ist die 5. Instanz von `linked URL` im Dokument; ohne das Suffix würde die erste Instanz hervorgehoben.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=downgrade:-,The%20Referer,be%20sent,-to%20origins](/de/docs/Web/HTML/Reference/Elements/a#:~:text=downgrade:-,The%20Referer,be%20sent,-to%20origins) scrollt zu und hebt die Instanz des Textes `The Referer ... be sent` hervor, die mit `downgrade:` vorangestellt und mit `to origins` nachgestellt ist. Dies veranschaulicht ein komplexeres Beispiel, bei dem das Präfix/Suffix verwendet wird, um den spezifischen Text zu fokussieren, den Sie verlinken möchten. Versuchen Sie zum Beispiel, das Präfix zu entfernen und zu sehen, was übereinstimmt.

### URLs mit mehreren Textfragmenten

Sie können mehrere Textfragmente angeben, die in derselben URL hervorgehoben werden, indem Sie sie mit einem Kaufmannszeichen (`&`) trennen. Schauen wir uns ein paar Beispiele an:

- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=Causes&text=linked](/de/docs/Web/HTML/Reference/Elements/a#:~:text=causes&text=linked) scrollt zu und hebt die ersten Instanzen der Textzeichenketten `Causes` und `linked` hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,-'s%20format&text=Deprecated-,attributes,attribute](/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,-'s%20format&text=Deprecated-,attributes,attribute) scrollt zu und hebt zwei Textinstanzen hervor:
  - Die erste Instanz des Textes `linked URL`, der direkt von `'s format` gefolgt wird.
  - Die erste Instanz einer Textzeichenkette, die mit `attributes` beginnt und mit `attribute` endet, und durch `Deprecated` vorangestellt ist.

Wenn Sie eines oder mehrere Ihrer Textfragmente nicht hervorgehoben sehen und sicher sind, dass Sie die Syntax korrekt haben, könnten Sie möglicherweise eine andere Instanz hervorheben als die, die Sie erwartet haben. Es könnte hervorgehoben sein, aber außerhalb des Bildschirms.

### Stilierung von übereinstimmenden Textfragmenten

Browser sind frei, den hervorgehobenen Text nach Belieben standardmäßig zu gestalten. Das [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo/#selectordef-target-text) definiert ein Pseudoelement, {{cssxref("::target-text")}}, das es Ihnen ermöglicht, eine benutzerdefinierte Gestaltung zu spezifizieren.

Zum Beispiel haben wir in unserem [scroll-to-text Demo](https://mdn.github.io/css-examples/target-text/index.html#:~:text=From%20the%20foregoing%20remarks%20we%20may%20gather%20an%20idea%20of%20the%20importance) das folgende CSS:

```css
::target-text {
  background-color: rebeccapurple;
  color: white;
}
```

Versuchen Sie, den obigen Link in einem unterstützenden Browser zu folgen, um die Wirkung zu sehen.

### Erkennbarkeit der Funktion

Das [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)-Objekt, das über die [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective)-Eigenschaft aufgerufen wird, kann verwendet werden, um zu testen, ob Textfragmente in einem Browser unterstützt werden.

Versuchen Sie, das Folgende in den Devtools eines unterstützenden Browsers in einem Tab mit einem oder mehreren passenden Textfragmenten auszuführen:

```js
document.fragmentDirective;
// returns an empty FragmentDirective object, if supported
// undefined otherwise
```

Diese Funktionalität ist derzeit hauptsächlich für die Funktionserkennung gedacht. In der Zukunft könnte das `FragmentDirective`-Objekt zusätzliche Informationen enthalten.

## Referenz

### API

- [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)
  - : Ein Objekt, das die Textfragmente repräsentiert. Derzeit leer und hauptsächlich für die Funktionserkennung gedacht.
- [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective)
  - : Gibt das [`FragmentDirective`](/de/docs/Web/API/FragmentDirective) für das aktuelle Dokument zurück.

### CSS

- {{cssxref("::target-text")}}
  - : Repräsentiert die hervorgehobenen Textfragmente im aktuellen Dokument. Es ermöglicht es Autoren, die Gestaltung von Textfragmenten anzupassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Boldly link where no one has linked before: Text Fragments](https://web.dev/articles/text-fragments)
