---
title: Textfragmente
slug: Web/URI/Reference/Fragment/Text_fragments
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

**Textfragmente** ermöglichen das direkte Verlinken auf einen bestimmten Textabschnitt in einem Webdokument, ohne dass der Autor ihn mit einer ID versehen muss, indem eine bestimmte Syntax im URL-Fragment verwendet wird. Unterstützende Browser können frei wählen, wie sie auf den verlinkten Text aufmerksam machen, z.B. durch Hervorheben mit einer Farbe und/oder durch Scrollen zum Inhalt auf der Seite. Dies ist nützlich, da es Webinhaltsautoren ermöglicht, tief in Inhalte zu verlinken, die sie nicht kontrollieren, ohne auf die Anwesenheit von IDs angewiesen zu sein. Auf dieser Grundlage könnte es verwendet werden, um effektivere Inhalte-Teilen-Links zu generieren, die Benutzer untereinander weitergeben können.

## Konzepte und Verwendung

Historisch gesehen war eine der Hauptmerkmale des Webs immer die Fähigkeit, Links zwischen verschiedenen Dokumenten bereitzustellen — das ist es, was _das Web_ zu einem Netz macht:

- Sie können auf den Anfang eines Dokuments verlinken, indem Sie auf seine URL verlinken, beispielsweise:
  - [https://developer.mozilla.org/de/docs/Web/HTML/Element/a](/de/docs/Web/HTML/Reference/Elements/a).
- Sie können auf einen bestimmten Abschnitt eines Dokuments verlinken, indem Sie auf seine URL plus das _Dokumentfragment_ (ID) des Abschnitts verlinken, beispielsweise:
  - [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#browser_compatibility](/de/docs/Web/HTML/Reference/Elements/a#browser_compatibility).

Das Problem beim Verlinken auf bestimmte Dokumentfragmente besteht darin, dass der Autor der verlinkten Seite einen Anker setzen muss, um _tatsächlich_ darauf zu verlinken. Das zweite Beispiel oben verlinkt auf ein {{htmlelement("Heading_Elements", "h2")}}-Element mit einer ID von `browser_compatibility`:

```html
<h2 id="browser_compatibility">
  <a href="#browser_compatibility">Browser compatibility</a>
</h2>
```

Wenn die ID geändert oder entfernt wird, wird das Dokumentfragment ignoriert, und der Link führt einfach zur Spitze der Seite. Dies ist in Bezug auf sanfte Degradation sinnvoll, aber es wäre im Grunde besser, wenn der Autor des Links die volle Kontrolle darüber hätte, wohin er verlinkt, ohne auf den Seitenautor angewiesen zu sein.

**Textfragmente** machen dies zur Realität — sie erlauben es Linkautoren, Textinhalte, anstatt Dokumentfragmente, in flexibler Weise anzugeben.

## Syntax

Ähnlich wie bei Dokumentfragmenten werden Textfragmente nach einem Hashtag-Zeichen (`#`) an eine URL angehängt. Die Syntax ist jedoch etwas anders:

```url
https://example.com#:~:text=[prefix-,]textStart[,textEnd][,-suffix]
```

Die wichtigsten Teile, die zu verstehen sind, sind wie folgt:

- `:~:`
  - : Auch bekannt als _das Fragmentdirektiv_, diese Zeichenfolge teilt dem Browser mit, dass das, was als Nächstes kommt, eine oder mehrere Benutzeragentenanweisungen sind, die beim Laden von der URL entfernt werden, sodass Autorenskripte nicht direkt mit ihnen interagieren können. Benutzeragentenanweisungen werden auch Direktiven genannt.
- `text=`
  - : Eine Textdirektive. Diese stellt dem Browser ein Textfragment zur Verfügung, das festlegt, welcher Text im verlinkten Dokument verlinkt werden soll.
- `textStart`
  - : Eine Textzeichenfolge, die den Beginn des verlinkten Textes angibt.
- `textEnd` {{optional_inline}}
  - : Eine Textzeichenfolge, die das Ende des verlinkten Textes angibt.
- `prefix-` {{optional_inline}}
  - : Eine Textzeichenfolge gefolgt von einem Bindestrich, die angibt, welcher Text dem verlinkten Text unmittelbar vorausgehen soll, wobei nur Leerzeichen dazwischen erlaubt sind. Dies hilft dem Browser, den korrekten verlinkten Text auszuwählen, falls mehrere Übereinstimmungen vorliegen.
- `-suffix` {{optional_inline}}
  - : Ein Bindestrich gefolgt von einer Textzeichenfolge, die angibt, welcher Text dem verlinkten Text unmittelbar folgen soll, wobei nur Leerzeichen dazwischen erlaubt sind. Dies hilft dem Browser, den korrekten verlinkten Text auszuwählen, falls mehrere Übereinstimmungen vorliegen.

Unterstützende Browser scrollen zum ersten Textfragment im verlinkten Dokument, das der angegebenen Direktive entspricht, und heben es hervor. Beachten Sie, dass es möglich ist, mehrere Textfragmente anzugeben, die in derselben URL hervorgehoben werden sollen, indem sie mit Ampersand-Zeichen (`&`) getrennt werden.

### Verwendungshinweise

- Textzeichenfolgen, die für die Werte `textStart`, `textEnd`, `prefix-` und `-suffix` verwendet werden, müssen [prozentsatzkodiert](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) sein. Zusätzlich verlangt [der Standard](https://wicg.github.io/scroll-to-text-fragment/#syntax), dass das URL-sichere Bindestrich-Zeichen `'-'` ähnlich prozentsatzkodiert wird.
- Übereinstimmungen sind nicht groß-/kleinschreibungssensitiv.
- Einzelne `textStart`, `textEnd`, `prefix-` und `-suffix` Zeichenfolgen müssen vollständig innerhalb desselben {{Glossary("Block-level_content", "Block-Level-Elementes")}} liegen, aber vollständige Übereinstimmungen können sich über mehrere Elemente-Grenzen hinweg erstrecken.
- Aus Sicherheitsgründen verlangt die Funktion, dass Links in einem noopener-Kontext geöffnet werden — Sie müssen `rel="noopener"` zu Ihren {{htmlelement("a")}}-Elementen hinzufügen und `noopener` zu Ihren [`window.open()`](/de/docs/Web/API/Window/open) Aufrufen hinzufügen, wenn Sie diese Funktion verwenden.
- Textfragmente werden nur bei von Benutzern initiierten Navigationen aufgerufen.
- Textfragmente werden nur auf den Hauptframe angewendet; Texte werden nicht in {{htmlelement("iframe")}}s durchsucht, und `iframe`-Navigationen werden kein Textfragment aufrufen.
- Für Websites, die sich abmelden möchten, unterstützen Chromium-basierte Browser einen [Document Policy](https://wicg.github.io/document-policy/) Header-Wert, den sie senden können, sodass Benutzeragenten Textfragmente nicht verarbeiten:

  ```http
  Document-Policy: force-load-at-top
  ```

> [!NOTE]
> Wenn das bereitgestellte Textfragment keinem Text im verlinkten Dokument entspricht oder wenn der Browser keine Textfragmente unterstützt, wird das gesamte Textfragment ignoriert, und der Anfang des Dokuments wird verlinkt.

## Beispiele

### Textfragment mit textStart

- [https://example.com/#:~:text=for](https://example.com/#:~:text=for) scrollt zum ersten Vorkommen des Textes `for` im Dokument und hebt es hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=human](/de/docs/Web/HTML/Reference/Elements/a#:~:text=human) scrollt zum ersten Vorkommen des Textes `human` im Dokument und hebt es hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL](/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL) scrollt zum ersten Vorkommen des Textes `linked URL` im Dokument und hebt es hervor.

### textStart und textEnd

- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=human,URL](/de/docs/Web/HTML/Reference/Elements/a#:~:text=human,url) scrollt zum ersten Vorkommen einer Textzeichenfolge, die mit `human` beginnt und mit `URL` endet, und hebt es hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,defining%20a%20value](/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,defining%20a%20value) scrollt zum ersten Vorkommen einer Textzeichenfolge, die mit `linked URL` beginnt und mit `defining a value` endet, und hebt es hervor. Beachten Sie, wie der hervorgehobene Text sich über mehrere Block-Level-Elemente erstreckt.

### Beispiele mit prefix- und/oder -suffix

- [https://example.com/#:~:text=asking-,for](https://example.com/#:~:text=asking-,for) scrollt zur zweiten Instanz des Textes `for` im Dokument und hebt es hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=sent-,referrer](/de/docs/Web/HTML/Reference/Elements/a#:~:text=sent-,referrer) scrollt zur ersten Instanz des Textes `referrer`, die den Text `sent` direkt davor hat. Dies ist die 5. Instanz von `referrer` im Dokument; ohne das Präfix würde die erste Instanz hervorgehoben.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,-'s%20format](/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,-'s%20format) scrollt zur ersten Instanz des Textes `linked URL`, die den Text `'s format` direkt danach hat. Dies ist die 5. Instanz von `linked URL` im Dokument; ohne das Suffix würde die erste Instanz hervorgehoben.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=downgrade:-,The%20Referer,be%20sent,-to%20origins](/de/docs/Web/HTML/Reference/Elements/a#:~:text=downgrade:-,The%20Referer,be%20sent,-to%20origins) scrollt zur Instanz des Textes `The Referer ... be sent`, die von `downgrade:` vorangestellt und von `to origins` nachgestellt ist. Dies veranschaulicht ein komplexeres Beispiel, bei dem das Präfix/Suffix verwendet wird, um sich auf den spezifischen Text zu konzentrieren, den Sie verlinken möchten. Versuchen Sie, das Präfix zu entfernen, und sehen Sie, was hervorgerufen wird.

### URLs mit mehreren Textfragmenten

Sie können mehrere Textfragmente angeben, die in derselben URL hervorgehoben werden sollen, indem Sie sie mit Ampersand-Zeichen (`&`) trennen. Schauen wir uns ein paar Beispiele an:

- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=Causes&text=linked](/de/docs/Web/HTML/Reference/Elements/a#:~:text=causes&text=linked) scrollt zu den ersten Vorkommen der Textzeichenfolgen `Causes` und `linked` und hebt sie hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,-'s%20format&text=Deprecated-,attributes,attribute](/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,-'s%20format&text=Deprecated-,attributes,attribute) scrollt zu und hebt zwei Textinstanzen hervor:
  - Die erste Instanz des Textes `linked URL`, die den Text `'s format` direkt danach hat.
  - Die erste Instanz einer Textzeichenfolge, die mit `attributes` beginnt und mit `attribute` endet, und von `Deprecated` vorangestellt wird.

Wenn Sie eines oder mehrere Ihrer Textfragmente nicht hervorgehoben sehen und sicher sind, dass Sie die Syntax korrekt haben, könnten Sie einfach eine andere Instanz hervorheben als diejenige, die Sie erwartet haben. Es könnte hervorgehoben sein, aber außerhalb des Bildschirms.

### Styling von gefundenen Textfragmenten

Browser können den hervorgehobenen Text auf beliebige Weise standardmäßig formatieren. Das [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo/#selectordef-target-text) definiert ein Pseudo-Element, {{cssxref("::target-text")}}, das es Ihnen ermöglicht, benutzerdefinierte Styling-Einstellungen zu spezifizieren.

Zum Beispiel haben wir in unserem [scroll-to-text Demo](https://mdn.github.io/css-examples/target-text/index.html#:~:text=From%20the%20foregoing%20remarks%20we%20may%20gather%20an%20idea%20of%20the%20importance) folgendes CSS:

```css
::target-text {
  background-color: rebeccapurple;
  color: white;
}
```

Versuchen Sie, den obigen Link in einem unterstützenden Browser zu folgen, um den Effekt zu sehen, den dies hat.

### Funktionserkennbarkeit

Das [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)-Objekt, das über die [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective)-Eigenschaft abgerufen wird, kann verwendet werden, um zu testen, ob Textfragmente in einem Browser unterstützt werden.

Versuchen Sie, das Folgende in den Devtools eines unterstützenden Browsers auszuführen, in einem Tab mit einem oder mehreren übereinstimmenden Textfragmenten:

```js
document.fragmentDirective;
// returns an empty FragmentDirective object, if supported
// undefined otherwise
```

Diese Funktionalität ist derzeit hauptsächlich für die Funktionserkennung gedacht. In Zukunft könnte das `FragmentDirective`-Objekt zusätzliche Informationen enthalten.

## Referenz

### API

- [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)
  - : Ein Objekt, das die Textfragmente repräsentiert. Derzeit leer und hauptsächlich zur Funktionserkennung gedacht.
- [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective)
  - : Gibt das [`FragmentDirective`](/de/docs/Web/API/FragmentDirective) für das aktuelle Dokument zurück.

### CSS

- {{cssxref("::target-text")}}
  - : Repräsentiert die hervorgehobenen Textfragmente im aktuellen Dokument. Es ermöglicht Autoren, das Styling von Textfragmenten anzupassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Kühn verlinken, wo noch niemand zuvor verlinkt hat: Textfragmente](https://web.dev/articles/text-fragments)
