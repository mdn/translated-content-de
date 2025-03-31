---
title: Textfragmente
slug: Web/URI/Reference/Fragment/Text_fragments
l10n:
  sourceCommit: 30bf998d2d87c97c2865d713ad5afc9c476264a0
---

**Textfragmente** ermöglichen das direkte Verlinken auf einen bestimmten Textabschnitt in einem Webdokument, ohne dass der Autor diesen mit einer ID versehen muss, indem eine spezielle Syntax im URL-Fragment verwendet wird. Unterstützende Browser können frei entscheiden, wie sie auf den verlinkten Text aufmerksam machen, z. B. durch farbliche Hervorhebung und/oder Scrollen zum Inhalt auf der Seite. Dies ist nützlich, da es den Autoren von Webinhalten ermöglicht, tief in andere Inhalte zu verlinken, die sie nicht kontrollieren, ohne auf die Anwesenheit von IDs angewiesen zu sein, um dies zu ermöglichen. Auf dieser Grundlage könnte es genutzt werden, um effektivere Links zur Inhaltsteilung zu generieren, die Benutzer einander weitergeben können.

## Konzepte und Anwendung

Historisch gesehen war eine der Schlüsselfunktionen des Webs schon immer die Fähigkeit, Links zwischen verschiedenen Dokumenten bereitzustellen — das macht _das Web_ zu einem Netz:

- Sie können an den Anfang eines Dokuments verlinken, indem Sie auf dessen URL verweisen, zum Beispiel:
  - [https://developer.mozilla.org/de/docs/Web/HTML/Element/a](/de/docs/Web/HTML/Element/a).
- Sie können auf einen bestimmten Abschnitt eines Dokuments verlinken, indem Sie auf dessen URL plus das _Dokumentfragment_ (ID) dieses Abschnitts verweisen, zum Beispiel:
  - [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#browser_compatibility](/de/docs/Web/HTML/Element/a#browser_compatibility).

Das Problem beim Verlinken auf spezifische Dokumentfragmente besteht darin, dass der Autor der verlinkten Seite einen Anker platzieren muss, um _tatsächlich_ darauf verlinken zu können. Das zweite Beispiel oben verlinkt auf ein {{htmlelement("Heading_Elements", "h2")}}-Element mit einer ID von `browser_compatibility`:

```html
<h2 id="browser_compatibility">
  <a href="#browser_compatibility">Browser compatibility</a>
</h2>
```

Wenn die ID geändert oder entfernt wird, wird das Dokumentfragment ignoriert, und der Link führt nur zum Anfang der Seite. Dies ist in Bezug auf eine sanfte Degradation sinnvoll, aber es wäre wohl besser, wenn der Autor des Links die volle Kontrolle darüber hätte, wohin sie verlinken, ohne auf den Seitenautor angewiesen zu sein.

**Textfragmente** machen genau das möglich — sie erlauben Linkautoren, Textinhalte zum Verlinken anzugeben, anstatt Dokumentfragmente auf flexible Weise.

## Syntax

Ähnlich wie Dokumentfragmente werden Textfragmente nach einem Hash-Zeichen (`#`) an eine URL angehängt. Die Syntax ist jedoch etwas anders:

```url
https://example.com#:~:text=[prefix-,]textStart[,textEnd][,-suffix]
```

Die Schlüsselbestandteile sind wie folgt:

- `:~:`
  - : Auch bekannt als _das Fragmentdirektiv_, diese Zeichenfolge teilt dem Browser mit, dass das Folgende eine oder mehrere Benutzeragentenanweisungen sind, die während des Ladevorgangs aus der URL entfernt werden, sodass Autorenskripte nicht direkt mit ihnen interagieren können. Benutzeragentenanweisungen werden auch als Direktiven bezeichnet.
- `text=`
  - : Eine Textanweisung. Diese liefert ein Textfragment an den Browser und definiert, welcher Text im verlinkten Dokument verlinkt werden soll.
- `textStart`
  - : Ein Textstring, der den Beginn des verlinkten Textes angibt.
- `textEnd` {{optional_inline}}
  - : Ein Textstring, der das Ende des verlinkten Textes angibt.
- `prefix-` {{optional_inline}}
  - : Ein Textstring, gefolgt von einem Bindestrich, der angibt, welcher Text direkt dem verlinkten Text vorausgehen soll, nur Leerzeichen dazwischen erlaubend. Dies hilft dem Browser, den richtigen verlinkten Text auszuwählen, in Fällen, in denen es mehrere Übereinstimmungen gibt.
- `-suffix` {{optional_inline}}
  - : Ein Bindestrich, gefolgt von einem Textstring, der angibt, welcher Text direkt dem verlinkten Text folgen soll, nur Leerzeichen dazwischen erlaubend. Dies hilft dem Browser, den richtigen verlinkten Text auszuwählen, in Fällen, in denen es mehrere Übereinstimmungen gibt.

Unterstützende Browser scrollen zum und heben das erste Textfragment im verlinkten Dokument hervor, das der angegebenen Direktive entspricht. Beachten Sie, dass es möglich ist, mehrere Textfragmente im selben URL hervorzuheben, indem sie mit einem kaufmännischen Und-Zeichen (`&`) getrennt werden.

### Anwendungshinweise

- Textstrings, die für die Werte `textStart`, `textEnd`, `prefix-` und `-suffix` verwendet werden, müssen [prozentcodiert](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) sein. Zusätzlich erfordert [der Standard](https://wicg.github.io/scroll-to-text-fragment/#syntax), dass das URL-sichere Bindestrich-Zeichen `'-'` ähnlich prozentcodiert wird.
- Übereinstimmungen sind nicht case-sensitiv.
- Einzelne `textStart`, `textEnd`, `prefix-` und `-suffix` Strings müssen vollständig innerhalb desselben {{Glossary("Block-level_content", "Block-Level-Elements")}} liegen, aber vollständige Übereinstimmungen können sich über mehrere Elementgrenzen erstrecken.
- Aus Sicherheitsgründen erfordert das Feature, dass Links in einem noopener-Kontext geöffnet werden: Sie müssen `rel="noopener"` zu Ihren {{htmlelement("a")}}-Elementen hinzufügen und `noopener` zu Ihren [`window.open()`](/de/docs/Web/API/Window/open) Aufrufen hinzufügen, wenn Sie dieses Feature verwenden.
- Textfragmente werden nur bei benutzerinitiierten Navigationen ausgelöst.
- Textfragmente werden nur auf den Hauptframe angewendet; Texte werden nicht innerhalb von {{htmlelement("iframe")}}s durchsucht, und `iframe`-Navigationen werden kein Textfragment auslösen.
- Für Websites, die sich abmelden möchten, unterstützen chromiumbasierte Browser einen [Document Policy](https://wicg.github.io/document-policy/) Header-Wert, den sie senden können, damit Benutzeragenten keine Textfragmente verarbeiten:

  ```http
  Document-Policy: force-load-at-top
  ```

> [!NOTE]
> Wenn das bereitgestellte Textfragment keinem Text im verlinkten Dokument entspricht oder wenn der Browser keine Textfragmente unterstützt, wird das gesamte Textfragment ignoriert und der Anfang des Dokuments verlinkt.

## Beispiele

### Textfragment mit textStart

- [https://example.com/#:~:text=for](https://example.com/#:~:text=for) scrollt zu und hebt das erste Vorkommen des Textes `for` im Dokument hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=human](/de/docs/Web/HTML/Element/a#:~:text=human) scrollt zu und hebt das erste Vorkommen des Textes `human` im Dokument hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL](/de/docs/Web/HTML/Element/a#:~:text=linked%20URL) scrollt zu und hebt das erste Vorkommen des Textes `linked URL` im Dokument hervor.

### textStart und textEnd

- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=human,URL](/de/docs/Web/HTML/Element/a#:~:text=human,url) scrollt zu und hebt das erste Vorkommen einer Textzeichenkette hervor, die mit `human` beginnt und mit `URL` endet.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,defining%20a%20value](/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,defining%20a%20value) scrollt zu und hebt das erste Vorkommen einer Textzeichenkette hervor, die mit `linked URL` beginnt und mit `defining a value` endet. Beachten Sie, wie sich der hervorgehobene Text über mehrere Block-Level-Elemente erstreckt.

### Beispiele mit prefix- und/oder -suffix

- [https://example.com/#:~:text=asking-,for](https://example.com/#:~:text=asking-,for) scrollt zu und hebt das zweite Vorkommen des Textes `for` im Dokument hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=sent-,referrer](/de/docs/Web/HTML/Element/a#:~:text=sent-,referrer) scrollt zu und hebt das erste Vorkommen des Textes `referrer` hervor, dem der Text `sent` direkt vorausgeht. Dies ist das 5. Vorkommen von `referrer` im Dokument; ohne den Prefix würde das erste Vorkommen hervorgehoben.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format](/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format) scrollt zu und hebt das erste Vorkommen des Textes `linked URL` hervor, dem der Text `'s format` direkt folgt. Dies ist das 5. Vorkommen von `linked URL` im Dokument; ohne den Suffix würde das erste Vorkommen hervorgehoben.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=downgrade:-,The%20Referer,be%20sent,-to%20origins](/de/docs/Web/HTML/Element/a#:~:text=downgrade:-,The%20Referer,be%20sent,-to%20origins) scrollt zu und hebt das Vorkommen des Textes `The Referer ... be sent` hervor, das durch `downgrade:` vorangestellt und durch `to origins` nachgestellt ist. Dies veranschaulicht ein komplexeres Beispiel, bei dem der Prefix/Suffix verwendet werden, um die spezifische Textinstanz, die Sie verlinken möchten, genauer zu bestimmen. Versuchen Sie zum Beispiel, den Prefix zu entfernen, und sehen Sie, was übereinstimmt.

### URLs mit mehreren Textfragmenten

Sie können mehrere Textfragmente im selben URL hervorheben, indem Sie sie mit kaufmännischen Und-Zeichen (`&`) trennen. Schauen wir uns ein paar Beispiele an:

- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=Causes&text=linked](/de/docs/Web/HTML/Element/a#:~:text=causes&text=linked) scrollt zu und hebt die ersten Vorkommen der Textzeichenketten `Causes` und `linked` hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format&text=Deprecated-,attributes,attribute](/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format&text=Deprecated-,attributes,attribute) scrollt zu und hebt zwei Textvorkommen hervor:
  - Das erste Vorkommen des Textes `linked URL`, dem der Text `'s format` direkt folgt.
  - Das erste Vorkommen einer Textzeichenkette, die mit `attributes` beginnt und mit `attribute` endet, das mit `Deprecated` vorangestellt ist.

Wenn eines oder mehrere Ihrer Textfragmente nicht hervorgehoben sind und Sie sicher sind, dass Sie die Syntax korrekt haben, könnte es sein, dass Sie einfach eine andere Instanz hervorheben, als Sie erwartet haben. Es könnte hervorgehoben sein, aber außerhalb des Bildschirms.

### Stilgestaltung von übereinstimmenden Textfragmenten

Browser sind frei, den hervorgehobenen Text in einer beliebigen Standardweise zu stylen. Das [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo/#selectordef-target-text) definiert ein Pseudo-Element, {{cssxref("::target-text")}}, das es ermöglicht, benutzerdefiniertes Styling anzugeben.

Zum Beispiel haben wir in unserem [scroll-to-text-Demo](https://mdn.github.io/css-examples/target-text/index.html#:~:text=From%20the%20foregoing%20remarks%20we%20may%20gather%20an%20idea%20of%20the%20importance) das folgende CSS:

```css
::target-text {
  background-color: rebeccapurple;
  color: white;
}
```

Versuchen Sie, den obigen Link in einem unterstützenden Browser zu verfolgen, um den Effekt zu sehen, den dies hat.

### Erkennbarkeit der Funktion

Das [`FragmentDirective`](/de/docs/Web/API/FragmentDirective) Objekt, das über die [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective) Eigenschaft zugegriffen werden kann, kann verwendet werden, um zu testen, ob Textfragmente in einem Browser unterstützt werden.

Versuchen Sie, das folgende in den Entwicklertools eines unterstützenden Browsers auszuführen, in einem Tab mit einem oder mehreren übereinstimmenden Textfragmenten:

```js
document.fragmentDirective;
// returns an empty FragmentDirective object, if supported
// undefined otherwise
```

Diese Funktionalität ist hauptsächlich derzeit für die Feature-Erkennung vorgesehen. In Zukunft könnte das `FragmentDirective`-Objekt zusätzliche Informationen enthalten.

## Referenz

### API

- [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)
  - : Ein Objekt, das die Textfragmente darstellt. Derzeit leer und hauptsächlich für die Feature-Erkennung vorgesehen.
- [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective)
  - : Gibt die [`FragmentDirective`](/de/docs/Web/API/FragmentDirective) für das aktuelle Dokument zurück.

### CSS

- {{cssxref("::target-text")}}
  - : Repräsentiert die hervorgehobenen Textfragmente im aktuellen Dokument. Es ermöglicht Autoren, das Styling von Textfragmenten anzupassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Mutig verlinken, wo noch niemand zuvor verlinkt hat: Textfragmente](https://web.dev/articles/text-fragments)
