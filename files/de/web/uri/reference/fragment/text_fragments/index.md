---
title: Textfragmente
slug: Web/URI/Reference/Fragment/Text_fragments
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

**Textfragmente** ermöglichen es, direkt auf einen bestimmten Teil eines Textes in einem Webdokument zu verlinken, ohne dass der Autor diesen mit einer ID versehen muss, indem eine spezielle Syntax im URL-Fragment verwendet wird. Unterstützende Browser können selbst entscheiden, wie sie auf den verlinkten Text aufmerksam machen, z.B. durch farbliche Hervorhebung und/oder Scrollen zum Inhalt auf der Seite. Dies ist nützlich, weil es Webautoren ermöglicht, tief zu anderen Inhalten zu verlinken, über die sie keine Kontrolle haben, ohne auf das Vorhandensein von IDs angewiesen zu sein. Aufbauend darauf könnte es genutzt werden, um effektivere Inhaltsfreigabelinks zu erstellen, die Benutzer untereinander weitergeben können.

## Konzepte und Verwendung

Historisch gesehen war eine der Hauptmerkmale des Webs schon immer seine Fähigkeit, Verbindungen zwischen verschiedenen Dokumenten bereitzustellen — das macht das _Web_ zu einem Netz:

- Sie können oben auf ein Dokument verlinken, indem Sie auf seine URL verlinken, zum Beispiel:
  - [https://developer.mozilla.org/de/docs/Web/HTML/Element/a](/de/docs/Web/HTML/Element/a).
- Sie können zu einem bestimmten Abschnitt eines Dokuments verlinken, indem Sie auf seine URL plus das _Dokumentfragment_ (ID) dieses Abschnitts verlinken, zum Beispiel:
  - [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#browser_compatibility](/de/docs/Web/HTML/Element/a#browser_compatibility).

Das Problem beim Verlinken auf spezifische Dokumentfragmente besteht darin, dass der Autor der verlinkten Seite einen Anker einrichten muss, um tatsächlich darauf verlinken zu können. Das zweite Beispiel oben verlinkt auf ein {{htmlelement("Heading_Elements", "h2")}}-Element mit der ID `browser_compatibility`:

```html
<h2 id="browser_compatibility">
  <a href="#browser_compatibility">Browser compatibility</a>
</h2>
```

Wenn die ID geändert oder entfernt wird, wird das Dokumentfragment ignoriert, und der Link führt einfach oben auf die Seite. Dies ist hinsichtlich einer sanften Degradation vernünftig, aber es wäre wohl besser, wenn der Autor des Links die volle Kontrolle darüber hätte, wohin sie verlinken, ohne auf den Seitenautor angewiesen zu sein.

**Textfragmente** machen dies zur Realität — sie erlauben Linkautoren, Textinhalte zum Verlinken anzugeben, anstatt Dokumentfragmente, auf flexible Weise.

## Syntax

Ähnlich wie bei Dokumentfragmenten werden Textfragmente nach einem Hash-Symbol (`#`) an eine URL angehängt. Die Syntax ist jedoch etwas anders:

```url
https://example.com#:~:text=[prefix-,]textStart[,textEnd][,-suffix]
```

Die wichtigsten Teile zu verstehen sind folgende:

- `:~:`
  - : Auch bekannt als _das Fragment-Direktiv_, diese Zeichenfolge teilt dem Browser mit, dass das Folgende eine oder mehrere Benutzeragentenanweisungen sind, die während des Ladens aus der URL entfernt werden, sodass Autorenskripte nicht direkt mit ihnen interagieren können. Benutzeragentenanweisungen werden auch als Direktiven bezeichnet.
- `text=`
  - : Eine Textdirektive. Dies bietet dem Browser ein Textfragment, das definiert, zu welchem Text im verlinkten Dokument verlinkt werden soll.
- `textStart`
  - : Eine Textzeichenfolge, die den Anfang des verlinkten Textes angibt.
- `textEnd` {{optional_inline}}
  - : Eine Textzeichenfolge, die das Ende des verlinkten Textes angibt.
- `prefix-` {{optional_inline}}
  - : Eine Textzeichenfolge, gefolgt von einem Bindestrich, die angibt, welcher Text dem verlinkten Text unmittelbar vorausgehen soll, wobei nur Leerzeichen dazwischen zulässig sind. Dies hilft dem Browser, den richtigen verlinkten Text auszuwählen, in Fällen, in denen es mehrere Übereinstimmungen gibt.
- `-suffix` {{optional_inline}}
  - : Ein Bindestrich gefolgt von einer Textzeichenfolge, die angibt, welcher Text dem verlinkten Text unmittelbar folgen soll, wobei nur Leerzeichen dazwischen zulässig sind. Dies hilft dem Browser, den richtigen verlinkten Text auszuwählen, in Fällen, in denen es mehrere Übereinstimmungen gibt.

Unterstützende Browser werden zum ersten Textfragment im verlinkten Dokument scrollen und es hervorheben, das mit der angegebenen Direktive übereinstimmt. Beachten Sie, dass es möglich ist, mehrere Textfragmente anzugeben, die in derselben URL hervorgehoben werden, indem sie mit dem Zeichen `&` getrennt werden.

### Verwendungshinweise

- Textzeichenfolgen, die für die Werte `textStart`, `textEnd`, `prefix-` und `-suffix` verwendet werden, müssen [prozentual kodiert](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) werden. Zusätzlich erfordert [der Standard](https://wicg.github.io/scroll-to-text-fragment/#syntax), dass das URL-sichere Zeichen `'-'` ähnlich prozentual kodiert wird.
- Übereinstimmungen sind nicht zwischen Groß- und Kleinschreibung unterscheidend.
- Einzelne `textStart`, `textEnd`, `prefix-` und `-suffix` Zeichenfolgen müssen vollständig innerhalb desselben {{Glossary("Block-level_content", "Block-Level-Elements")}} liegen, aber vollständige Übereinstimmungen können sich über mehrere Elementgrenzen erstrecken.
- Aus Sicherheitsgründen erfordert die Funktion, dass Links in einem "noopener"-Kontext geöffnet werden — Sie müssen `rel="noopener"` zu Ihren {{htmlelement("a")}}-Elementen hinzufügen und `noopener` zu Ihren [`window.open()`](/de/docs/Web/API/Window/open) Aufrufen, wenn Sie diese Funktion verwenden.
- Textfragmente werden nur bei von Benutzer initiierten Navigationen aufgerufen.
- Textfragmente werden nur auf den Hauptframe angewendet; Text wird nicht innerhalb von {{htmlelement("iframe")}}s durchsucht, und `iframe`-Navigationen werden kein Textfragment aufrufen.
- Für Websites, die sich abmelden möchten, unterstützen auf Chromium basierende Browser einen [Document Policy](https://wicg.github.io/document-policy/) Header-Wert, den sie senden können, sodass Benutzeragenten keine Textfragmente verarbeiten:

  ```http
  Document-Policy: force-load-at-top
  ```

> [!NOTE]
> Wenn das bereitgestellte Textfragment nicht mit einem Text im verlinkten Dokument übereinstimmt oder wenn der Browser keine Textfragmente unterstützt, wird das gesamte Textfragment ignoriert und oben auf das Dokument verlinkt.

## Beispiele

### Textfragment mit textStart

- [https://example.com/#:~:text=for](https://example.com/#:~:text=for) scrollt und hebt die erste Instanz des Textes `for` im Dokument hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=human](/de/docs/Web/HTML/Element/a#:~:text=human) scrollt und hebt die erste Instanz des Textes `human` im Dokument hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL](/de/docs/Web/HTML/Element/a#:~:text=linked%20URL) scrollt und hebt die erste Instanz des Textes `linked URL` im Dokument hervor.

### textStart und textEnd

- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=human,URL](/de/docs/Web/HTML/Element/a#:~:text=human,url) scrollt und hebt die erste Instanz einer Textzeichenfolge hervor, die mit `human` beginnt und mit `URL` endet.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,defining%20a%20value](/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,defining%20a%20value) scrollt und hebt die erste Instanz einer Textzeichenfolge hervor, die mit `linked URL` beginnt und mit `defining a value` endet. Beachten Sie, wie der hervorgehobene Text sich über mehrere Block-Level-Elemente erstreckt.

### Beispiele mit prefix- und/oder -suffix

- [https://example.com/#:~:text=asking-,for](https://example.com/#:~:text=asking-,for) scrollt und hebt die zweite Instanz des Textes `for` im Dokument hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=sent-,referrer](/de/docs/Web/HTML/Element/a#:~:text=sent-,referrer) scrollt und hebt die erste Instanz des Textes `referrer` hervor, die den Text `sent` direkt davor hat. Dies ist die 5. Instanz von `referrer` im Dokument; ohne Präfix wäre die erste Instanz hervorgehoben worden.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format](/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format) scrollt und hebt die erste Instanz des Textes `linked URL` hervor, die den Text `'s format` direkt dahinter hat. Dies ist die 5. Instanz von `linked URL` im Dokument; ohne Suffix wäre die erste Instanz hervorgehoben worden.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=downgrade:-,The%20Referer,be%20sent,-to%20origins](/de/docs/Web/HTML/Element/a#:~:text=downgrade:-,The%20Referer,be%20sent,-to%20origins) scrollt und hebt die Instanz des Textes `The Referer ... be sent` hervor, die durch `downgrade:` vorangestellt und durch `to origins` nachgestellt wird. Dies veranschaulicht ein komplexeres Beispiel, bei dem das Präfix/Suffix verwendet wird, um die spezifische Textinstanz zu bestimmen, zu der Sie verlinken möchten. Versuchen Sie zum Beispiel, das Präfix zu entfernen, und sehen Sie, was übereinstimmt.

### URLs mit mehreren Textfragmenten

Sie können mehrere Textfragmente angeben, die in derselben URL hervorgehoben werden sollen, indem sie mit dem Zeichen `&` getrennt werden. Sehen wir uns ein paar Beispiele an:

- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=Causes&text=linked](/de/docs/Web/HTML/Element/a#:~:text=causes&text=linked) scrollt und hebt die ersten Instanzen der Textzeichenfolgen `Causes` und `linked` hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format&text=Deprecated-,attributes,attribute](/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format&text=Deprecated-,attributes,attribute) scrollt und hebt zwei Textinstanzen hervor:
  - Die erste Instanz des Textes `linked URL`, die den Text `'s format` direkt dahinter hat.
  - Die erste Instanz einer Textzeichenfolge, die mit `attributes` beginnt und mit `attribute` endet, wobei sie durch `Deprecated` vorangestellt wird.

Wenn Sie eines oder mehrere Ihrer Textfragmente nicht hervorgehoben sehen und sicher sind, dass die Syntax korrekt ist, wird möglicherweise ein anderes Vorkommen als das von Ihnen erwartete hervorgehoben. Es könnte hervorgehoben sein, aber außerhalb des Bildschirms.

### Stilierung von hervorgehobenen Textfragmenten

Browser können den hervorgehobenen Text in beliebiger Standardweise gestalten. Das [CSS-Pseudoelemente-Modul Level 4](https://drafts.csswg.org/css-pseudo/#selectordef-target-text) definiert ein Pseudoelement, {{cssxref("::target-text")}}, mit dem Sie benutzerdefinierte Stilregelungen angeben können.

Zum Beispiel haben wir in unserem [scroll-to-text-Demo](https://mdn.github.io/css-examples/target-text/index.html#:~:text=From%20the%20foregoing%20remarks%20we%20may%20gather%20an%20idea%20of%20the%20importance) das folgende CSS:

```css
::target-text {
  background-color: rebeccapurple;
  color: white;
}
```

Versuchen Sie, obenstehenden Link in einem unterstützenden Browser zu folgen, um den Effekt zu sehen.

### Erkennbarkeit der Funktion

Das [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)-Objekt, das über die [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective)-Eigenschaft zugegriffen wird, kann verwendet werden, um zu testen, ob Textfragmente in einem Browser unterstützt werden.

Versuchen Sie das Folgende in den Devtools eines unterstützenden Browsers auszuführen, in einem Tab mit einem oder mehreren übereinstimmenden Textfragmenten:

```js
document.fragmentDirective;
// returns an empty FragmentDirective object, if supported
// undefined otherwise
```

Diese Funktionalität ist derzeit hauptsächlich für die Erkennung von Funktionen vorgesehen. In der Zukunft könnte das `FragmentDirective`-Objekt zusätzliche Informationen enthalten.

## Referenz

### API

- [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)
  - : Ein Objekt, das die Textfragmente repräsentiert. Momentan leer und hauptsächlich für die Funktionsdetektion vorgesehen.
- [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective)
  - : Gibt die [`FragmentDirective`](/de/docs/Web/API/FragmentDirective) für das aktuelle Dokument zurück.

### CSS

- {{cssxref("::target-text")}}
  - : Repräsentiert die hervorgehobenen Textfragmente im aktuellen Dokument. Es ermöglicht Autoren, die Stilgestaltung von Textfragmenten anzupassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Kühn dort verlinken, wo noch niemand vorher verlinkt hat: Textfragmente](https://web.dev/articles/text-fragments)
