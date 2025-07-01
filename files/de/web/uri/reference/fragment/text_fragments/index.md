---
title: Textfragmente
slug: Web/URI/Reference/Fragment/Text_fragments
l10n:
  sourceCommit: 466ca1db767535c1aa9984b4e6c0db41b3a53475
---

**Textfragmente** ermöglichen das direkte Verlinken zu einem bestimmten Textabschnitt in einem Webdokument, ohne dass der Autor es mit einer ID annotieren muss, indem eine spezielle Syntax im URL-Fragment verwendet wird. Unterstützende Browser können frei wählen, wie sie den verlinkten Text hervorheben, z.B. mit einer Farbmarkierung und/oder indem sie zum Inhalt auf der Seite scrollen. Dies ist nützlich, da es Webautoren ermöglicht, tief zu verlinken, ohne auf vorhandene IDs angewiesen zu sein. Darüber hinaus können so effektivere Links zum Teilen von Inhalten erstellt werden, die Benutzer untereinander austauschen können.

## Konzepte und Nutzung

Historisch gesehen war eine der wichtigsten Funktionen des Webs immer seine Fähigkeit, Links zwischen verschiedenen Dokumenten bereitzustellen – das ist, was _das Web_ zu einem Netz macht:

- Sie können zum Anfang eines Dokuments verlinken, indem Sie seine URL verwenden, zum Beispiel:
  - [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a](/de/docs/Web/HTML/Reference/Elements/a).
- Sie können zu einem bestimmten Abschnitt eines Dokuments verlinken, indem Sie seine URL plus das _Dokumentfragment_ (ID) dieses Abschnitts verwenden, zum Beispiel:
  - [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#browser_compatibility](/de/docs/Web/HTML/Reference/Elements/a#browser_compatibility).

Das Problem beim Verlinken zu bestimmten Dokumentfragmenten besteht darin, dass der Autor der verlinkten Seite einen Anker setzen muss, um tatsächlich darauf zu verlinken. Das zweite Beispiel oben verlinkt zu einem {{htmlelement("Heading_Elements", "h2")}}-Element mit der ID `browser_compatibility`:

```html
<h2 id="browser_compatibility">
  <a href="#browser_compatibility">Browser compatibility</a>
</h2>
```

Wenn die ID geändert oder entfernt wird, wird das Dokumentfragment ignoriert und der Link führt nur zum Seitenanfang. Dies ist in Bezug auf eine reibungslose Degradation sinnvoll, doch es wäre besser, wenn der Autor des Links die volle Kontrolle darüber hätte, wohin sie verlinken, ohne auf den Seitenautor angewiesen zu sein.

**Textfragmente** machen dies möglich – sie erlauben es Link-Autoren, Textinhalt anstelle von Dokumentfragmenten auf flexible Weise zu spezifizieren.

## Syntax

```url
https://example.com#:~:text=[prefix-,]textStart[,textEnd][,-suffix]
```

Textfragmente sind eine Art URL-Fragment und werden nach dem `#` geschrieben. Die wesentlichen Teile sind:

- `:~:`
  - : Auch bekannt als _das Fragment-Direktiv_, teilt diese Zeichenfolge dem Browser mit, dass was folgt eine oder mehrere Nutzeragenten-Instruktionen sind, die während des Ladens von der URL entfernt werden, so dass Autorenskripte nicht direkt mit ihnen interagieren können. Nutzeragenten-Instruktionen werden auch Direktiven genannt.
- `text=`
  - : Eine Text-Direktive. Sie bietet dem Browser ein Textfragment, das definiert, welcher Text im verlinkten Dokument zu verlinken ist.
- `textStart`
  - : Eine Textzeichenfolge, die den Anfang des verlinkten Textes angibt.
- `textEnd` {{optional_inline}}
  - : Eine Textzeichenfolge, die das Ende des verlinkten Textes angibt.
- `prefix-` {{optional_inline}}
  - : Eine Textzeichenfolge gefolgt von einem Bindestrich, die angibt, welcher Text direkt dem verlinkten Text vorausgehen soll, wobei nur Leerzeichen dazwischen erlaubt sind. Dies hilft dem Browser, den korrekten verlinkten Text auszuwählen, wenn es mehrere Übereinstimmungen gibt.
- `-suffix` {{optional_inline}}
  - : Ein Bindestrich gefolgt von einer Textzeichenfolge, die angibt, welcher Text dem verlinkten Text direkt folgen soll, wobei nur Leerzeichen dazwischen erlaubt sind. Dies hilft dem Browser, den korrekten verlinkten Text auszuwählen, wenn es mehrere Übereinstimmungen gibt.

Unterstützende Browser werden zum ersten Textfragment scrollen und es hervorheben, dessen Direktive mit der angegebenen übereinstimmt. Beachten Sie, dass es möglich ist, mehrere Textfragmente in derselben URL zu spezifizieren, indem diese mit dem Zeichen `&` getrennt werden.

### Nutzungshinweise

- Die für die Werte `textStart`, `textEnd`, `prefix-` und `-suffix` verwendeten Textzeichenfolgen müssen [prozentkodiert](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) sein. Darüber hinaus erfordert [der Standard](https://wicg.github.io/scroll-to-text-fragment/#syntax), dass das URL-sichere Zeichen `'-'` ähnlich prozentkodiert wird.
- Übereinstimmungen sind nicht case-sensitiv.
- Einzelne `textStart`, `textEnd`, `prefix-` und `-suffix` Zeichenfolgen müssen vollständig innerhalb desselben {{Glossary("Block-level_content", "Block-Level-Elements")}} liegen, aber vollständige Übereinstimmungen können sich über mehrere Elementgrenzen erstrecken.
- Aus Sicherheitsgründen sollten Sie, wenn Sie dieses Merkmal verwenden, um auf eine seitenfremde Seite zu verlinken, den Link in einem `noopener`-Kontext öffnen – Sie müssen `rel="noopener"` zu Ihren {{htmlelement("a")}}-Elementen hinzufügen und `noopener` zu Ihren [`window.open()`](/de/docs/Web/API/Window/open) Aufrufen hinzufügen, wenn Sie dieses Merkmal verwenden.
- Textfragmente werden nur bei Benutzernavigationen aufgerufen.
- Textfragmente werden nur auf den Hauptframe angewendet; Text wird nicht innerhalb von {{htmlelement("iframe")}}s durchsucht, und `iframe`-Navigation wird kein Textfragment aufrufen.
- Für Websites, die sich abmelden möchten, unterstützen Chromium-basierte Browser einen [Document Policy](https://wicg.github.io/document-policy/)-Headerwert, den sie senden können, damit Benutzeragenten keine Textfragmente verarbeiten:

  ```http
  Document-Policy: force-load-at-top
  ```

> [!NOTE]
> Wenn das bereitgestellte Textfragment keinem Text im verlinkten Dokument entspricht oder wenn der Browser keine Textfragmente unterstützt, wird das gesamte Textfragment ignoriert und es wird zum Seitenanfang verlinkt.

## Beispiele

### Textfragment mit textStart

- [https://example.com/#:~:text=for](https://example.com/#:~:text=for) scrollt zur ersten Instanz des Textes `for` im Dokument und hebt diese hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=human](/de/docs/Web/HTML/Reference/Elements/a#:~:text=human) scrollt zur ersten Instanz des Textes `human` im Dokument und hebt diese hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL](/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL) scrollt zur ersten Instanz des Textes `linked URL` im Dokument und hebt diese hervor.

### textStart und textEnd

- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=human,URL](/de/docs/Web/HTML/Reference/Elements/a#:~:text=human,url) scrollt zur ersten Instanz eines Textes, der mit `human` beginnt und mit `URL` endet, und hebt diesen hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,defining%20a%20value](/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,defining%20a%20value) scrollt zur ersten Instanz eines Textes, der mit `linked URL` beginnt und mit `defining a value` endet, und hebt diesen hervor. Beachten Sie, wie der hervorgehobene Text sich über mehrere Block-Level-Elemente erstreckt.

### Beispiele mit prefix- und/oder -suffix

- [https://example.com/#:~:text=asking-,for](https://example.com/#:~:text=asking-,for) scrollt zur zweiten Instanz des Textes `for` im Dokument und hebt diesen hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=sent-,referrer](/de/docs/Web/HTML/Reference/Elements/a#:~:text=sent-,referrer) scrollt zur ersten Instanz des Textes `referrer`, dem der Text `sent` direkt vorausgeht. Dies ist die 5. Instanz von `referrer` im Dokument; ohne den Prefix würde die erste Instanz hervorgehoben.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,-'s%20format](/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,-'s%20format) scrollt zur ersten Instanz des Textes `linked URL`, der vom Text `'s format` direkt gefolgt wird. Dies ist die 5. Instanz von `linked URL` im Dokument; ohne den Suffix würde die erste Instanz hervorgehoben.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=downgrade:-,The%20Referer,be%20sent,-to%20origins](/de/docs/Web/HTML/Reference/Elements/a#:~:text=downgrade:-,The%20Referer,be%20sent,-to%20origins) scrollt zur Instanz des Textes `The Referer ... be sent`, die von `downgrade:` vorangegangen und von `to origins` gefolgt wird. Dies illustriert ein komplexeres Beispiel, bei dem der Prefix/Suffix verwendet wird, um auf die spezifische Textinstanz hinzuweisen, zu der Sie verlinken möchten. Versuchen Sie beispielsweise, den Prefix zu entfernen, und sehen Sie, was hervorgehoben wird.

### URLs mit mehreren Textfragmenten

Sie können mehrere Textfragmente in derselben URL angeben, indem Sie diese mit dem Zeichen `&` trennen. Schauen wir uns ein paar Beispiele an:

- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=Causes&text=linked](/de/docs/Web/HTML/Reference/Elements/a#:~:text=causes&text=linked) scrollt und hebt die ersten Instanzen der Textzeichenfolgen `Causes` und `linked` hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,-'s%20format&text=Deprecated-,attributes,attribute](/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,-'s%20format&text=Deprecated-,attributes,attribute) scrollt und hebt zwei Textinstanzen hervor:
  - Die erste Instanz des Textes `linked URL`, die vom Text `'s format` direkt gefolgt wird.
  - Die erste Instanz einer Textzeichenfolge, die mit `attributes` beginnt und mit `attribute` endet und von `Deprecated` vorangegangen wird.

Wenn Sie annehmen, dass einer oder mehrere Ihrer Textfragmente nicht hervorgehoben werden, obwohl Sie sicher sind, dass Ihre Syntax korrekt ist, könnten Sie einfach eine andere Instanz hervorheben, als die Sie erwartet haben. Es könnte hervorgehoben sein, aber außerhalb des sichtbaren Bereichs.

### Styling von hervorgehobenen Textfragmenten

Browser sind frei, den hervorgehobenen Text auf beliebige, standardmäßige Weise zu gestalten. Das [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo/#selectordef-target-text) definiert ein Pseudoelement, {{cssxref("::target-text")}}, mit dem Sie benutzerdefiniertes Styling spezifizieren können.

Zum Beispiel haben wir in unserem [scroll-to-text-Demo](https://mdn.github.io/css-examples/target-text/index.html#:~:text=From%20the%20foregoing%20remarks%20we%20may%20gather%20an%20idea%20of%20the%20importance) folgendes CSS:

```css
::target-text {
  background-color: rebeccapurple;
  color: white;
}
```

Versuchen Sie, obigen Link in einem unterstützenden Browser zu folgen, um die Wirkung zu sehen.

### Erkennbarkeit der Funktion

Das [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)-Objekt, auf das über die [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective)-Eigenschaft zugegriffen wird, kann verwendet werden, um zu testen, ob Textfragmente in einem Browser unterstützt werden.

Versuchen Sie, Folgendes in den DevTools eines unterstützenden Browsers in einem Tab mit einem oder mehreren passenden Textfragmenten auszuführen:

```js
document.fragmentDirective;
// returns an empty FragmentDirective object, if supported
// undefined otherwise
```

Diese Funktionalität ist derzeit hauptsächlich für die Erkennung von Funktionen vorgesehen. In Zukunft könnte das `FragmentDirective`-Objekt zusätzliche Informationen enthalten.

## Referenz

### API

- [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)
  - : Ein Objekt, das die Textfragmente darstellt. Derzeit leer und hauptsächlich zur Merkmalsdetektion vorgesehen.
- [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective)
  - : Gibt die [`FragmentDirective`](/de/docs/Web/API/FragmentDirective) für das aktuelle Dokument zurück.

### CSS

- {{cssxref("::target-text")}}
  - : Repräsentiert die hervorgehobenen Textfragmente im aktuellen Dokument. Es erlaubt Autoren, das Styling von Textfragmenten anzupassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Boldly link where no one has linked before: Text Fragments](https://web.dev/articles/text-fragments)
