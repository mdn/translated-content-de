---
title: Textfragmente
slug: Web/URI/Fragment/Text_fragments
l10n:
  sourceCommit: 22c45a1f70bd7ee51ee06f416d8a18cef2431a63
---

{{QuickLinksWithSubpages("/de/docs/Web/URI")}}

**Textfragmente** ermöglichen das direkte Verlinken auf einen spezifischen Teil eines Textes in einem Webdokument, ohne dass der Autor es mit einer ID versehen muss. Dies erfolgt durch eine spezielle Syntax im URL-Fragment. Unterstützende Browser können selbst entscheiden, wie der verlinkte Text hervorgehoben wird, z. B. durch Farbmarkierungen und/oder das Scrollen zur entsprechenden Stelle auf der Seite. Dies ist nützlich, da es Webinhaltsautoren erlaubt, tief in andere Inhalte zu verlinken, auf die sie keinen direkten Einfluss haben, ohne auf die Anwesenheit von IDs angewiesen zu sein. Darüber hinaus kann dies genutzt werden, um effektivere Links zum Teilen von Inhalten zu erstellen, die Nutzer untereinander weitergeben können.

## Konzepte und Verwendung

Historisch gesehen war eine der Kernfunktionen des Webs schon immer seine Fähigkeit, Links zwischen verschiedenen Dokumenten bereitzustellen – das ist es, was _das Web_ zu einem Netz macht:

- Sie können zum Anfang eines Dokuments verlinken, indem Sie auf seine URL verweisen, beispielsweise:
  - [https://developer.mozilla.org/de/docs/Web/HTML/Element/a](/de/docs/Web/HTML/Element/a).
- Sie können zu einem spezifischen Abschnitt in einem Dokument verlinken, indem Sie dessen URL plus das _Dokumentenfragment_ (ID) des Abschnitts verwenden, beispielsweise:
  - [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#browser_compatibility](/de/docs/Web/HTML/Element/a#browser_compatibility).

Das Problem beim Verlinken auf spezifische Dokumentenfragmente ist, dass der Autor der verlinkten Seite einen Anker bereitstellen muss, auf den tatsächlich verlinkt werden kann. Im obigen zweiten Beispiel wird auf ein {{htmlelement("Heading_Elements", "h2")}}-Element mit der ID `browser_compatibility` verlinkt:

```html
<h2 id="browser_compatibility">
  <a href="#browser_compatibility">Browser compatibility</a>
</h2>
```

Wenn die ID geändert oder entfernt wird, wird das Dokumentenfragment ignoriert, und der Link führt lediglich zum Anfang der Seite. Dies ist in Bezug auf eine schrittweise Degradation angemessen, aber es wäre wohl besser, wenn der Autor des Links vollständige Kontrolle darüber hätte, wohin der Link führt, ohne auf den Seitenautor angewiesen zu sein.

**Textfragmente** machen dies möglich – sie erlauben es Linkautoren, Textinhalte anstelle von Dokumentenfragmenten flexibel als Ziel zu definieren.

## Syntax

Ähnlich wie bei Dokumentenfragmenten werden Textfragmente nach einem Rautezeichen (`#`) an eine URL angehängt. Die Syntax ist jedoch etwas anders:

```url
https://example.com#:~:text=[prefix-,]textStart[,textEnd][,-suffix]
```

Die Hauptbestandteile sind wie folgt zu verstehen:

- `:~:`
  - : Auch bekannt als _Fragmentrichtlinie_, gibt diese Zeichenfolge dem Browser an, dass die folgenden Komponenten eine oder mehrere Benutzeragenten-Anweisungen sind, die beim Laden aus der URL entfernt werden, sodass Skripte des Autors nicht direkt darauf zugreifen können. Benutzeragenten-Anweisungen werden auch als Richtlinien bezeichnet.
- `text=`
  - : Eine Textrichtlinie. Diese stellt dem Browser ein Textfragment bereit, das definiert, welcher Text im verlinkten Dokument verlinkt werden soll.
- `textStart`
  - : Ein Textstring, der den Anfang des verlinkten Textes spezifiziert.
- `textEnd` {{optional_inline}}
  - : Ein Textstring, der das Ende des verlinkten Textes spezifiziert.
- `prefix-` {{optional_inline}}
  - : Ein Textstring, gefolgt von einem Bindestrich, der angibt, welcher Text dem verlinkten Text unmittelbar vorausgehen soll, wobei nur Leerzeichen erlaubt sind. Dies hilft dem Browser, den korrekten Text zu identifizieren, wenn es mehrere Übereinstimmungen gibt.
- `-suffix` {{optional_inline}}
  - : Ein Bindestrich, gefolgt von einem Textstring, der angibt, welcher Text dem verlinkten Text unmittelbar folgen soll, wobei nur Leerzeichen erlaubt sind. Auch dies hilft dem Browser, den richtigen Text auszuwählen, wenn es mehrere Übereinstimmungen gibt.

Unterstützende Browser scrollen zu und heben das erste Textfragment im verlinkten Dokument hervor, das der spezifizierten Richtlinie entspricht. Beachten Sie, dass es möglich ist, mehrere Textfragmente in derselben URL zu spezifizieren, indem man sie mit Ampersand (`&`) Zeichen trennt.

### Nutzungsnotizen

- Textstrings, die als Werte von `textStart`, `textEnd`, `prefix-` und `-suffix` verwendet werden, müssen [prozentkodiert](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) werden. Zusätzlich verlangt [der Standard](https://wicg.github.io/scroll-to-text-fragment/#syntax), dass das URL-sichere Zeichen `'-'` ebenfalls prozentkodiert wird.
- Übereinstimmungen sind nicht groß-/kleinschreibungssensitiv.
- Einzelne `textStart`, `textEnd`, `prefix-` und `-suffix` Strings müssen vollständig innerhalb desselben {{Glossary("Block-level_content", "Block-Level-Elements")}} liegen, aber vollständige Übereinstimmungen können mehrere Elementgrenzen überspannen.
- Aus Sicherheitsgründen benötigt die Funktion, dass Links in einem 'noopener'-Kontext geöffnet werden – Sie müssen `rel="noopener"` zu Ihren {{htmlelement("a")}}-Elementen hinzufügen und `noopener` in Ihren [`window.open()`](/de/docs/Web/API/Window/open)-Aufrufen verwenden, wenn Sie diese Funktion einsetzen.
- Textfragmente werden nur bei durch den Nutzer initiierten Navigationen aufgerufen.
- Textfragmente werden nur auf den Hauptframe angewendet; Text wird nicht in {{htmlelement("iframe")}}s durchsucht, und `iframe`-Navigation aktiviert kein Textfragment.
- Websites, die sich gegen diese Funktion entscheiden möchten, können in Chromium-basierten Browsern eine [Document Policy](https://wicg.github.io/document-policy/) Header-Wert senden, damit Benutzeragenten keine Textfragmente verarbeiten:

  ```http
  Document-Policy: force-load-at-top
  ```

> [!NOTE]
> Wenn das bereitgestellte Textfragment mit keinem Text im verlinkten Dokument übereinstimmt oder wenn der Browser Textfragmente nicht unterstützt, wird das gesamte Textfragment ignoriert und der Link führt zum oberen Teil des Dokuments.

## Beispiele

### Einfaches Textfragment mit textStart

- [https://example.com#:~:text=for](https://example.com#:~:text=for) scrollt zu und hebt die erste Instanz des Textes `for` im Dokument hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=human](/de/docs/Web/HTML/Element/a#:~:text=human) scrollt zu und hebt die erste Instanz des Textes `human` im Dokument hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL](/de/docs/Web/HTML/Element/a#:~:text=linked%20URL) scrollt zu und hebt die erste Instanz des Textes `linked URL` im Dokument hervor.

### textStart und textEnd

- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=human,URL](/de/docs/Web/HTML/Element/a#:~:text=human,url) scrollt zu und hebt eine Textzeichenkette hervor, die mit `human` beginnt und mit `URL` endet.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,defining%20a%20value](/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,defining%20a%20value) scrollt zu und hebt eine Textzeichenkette hervor, die mit `linked URL` beginnt und mit `defining a value` endet. Beachten Sie, wie der hervorgehobene Text mehrere Block-Level-Elemente überspannt.

### Beispiele mit prefix- und/oder -suffix

- [https://example.com#:~:text=asking-,for](https://example.com#:~:text=asking-,for) scrollt zu und hebt die zweite Instanz des Textes `for` im Dokument hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=sent-,referrer](/de/docs/Web/HTML/Element/a#:~:text=sent-,referrer) scrollt zu und hebt die erste Instanz des Textes `referrer` hervor, bei der der Text `sent` direkt davor steht. Dies ist die fünfte Instanz von `referrer` im Dokument; ohne das Präfix würde die erste Instanz hervorgehoben.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format](/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format) scrollt zu und hebt die erste Instanz des Textes `linked URL` hervor, bei der der Text `'s format` direkt danach steht. Dies ist die fünfte Instanz von `linked URL` im Dokument; ohne das Suffix würde die erste Instanz hervorgehoben.

### URLs mit mehreren Textfragmenten

Sie können mehrere Textfragmente zum Hervorheben in derselben URL angeben, indem Sie sie mit Ampersand (`&`) Zeichen trennen. Schauen wir uns ein paar Beispiele an:

- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=Causes&text=linked](/de/docs/Web/HTML/Element/a#:~:text=causes&text=linked) scrollt zu und hebt die ersten Instanzen der Textstrings `Causes` und `linked` hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format&text=Deprecated-,attributes,attribute](/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format&text=Deprecated-,attributes,attribute) scrollt zu und hebt zwei Textinstanzen hervor:
  - Die erste Instanz des Textes `linked URL`, bei der der Text `'s format` direkt danach steht.
  - Die erste Instanz einer Textzeichensequenz, die mit `attributes` beginnt und mit `attribute` endet, und durch das Präfix `Deprecated` spezifiziert wird.

Wenn einer oder mehrere Ihrer Textfragmente nicht hervorgehoben werden und Sie sicher sind, dass Sie die Syntax korrekt haben, könnten Sie möglicherweise eine andere Instanz markieren als die, die Sie erwartet haben. Es könnte hervorgehoben, aber außerhalb des Bildschirms sein.

### Styling von markierten Textfragmenten

Browser sind frei, den hervorgehobenen Text auf irgendeine standardmäßige Weise zu gestalten. Das [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo/#selectordef-target-text) definiert ein Pseudo-Element, {{cssxref("::target-text")}}, mit dem Sie eine individuelle Gestaltung festlegen können.

Zum Beispiel haben wir in unserer [scroll-to-text Demo](https://mdn.github.io/css-examples/target-text/index.html#:~:text=From%20the%20foregoing%20remarks%20we%20may%20gather%20an%20idea%20of%20the%20importance) folgendes CSS:

```css
::target-text {
  background-color: rebeccapurple;
  color: white;
}
```

Versuchen Sie, den obigen Link in einem unterstützenden Browser zu folgen, um den Effekt zu sehen.

### Erkennbarkeit der Funktion

Das [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)-Objekt, das über die [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective)-Eigenschaft aufgerufen wird, kann verwendet werden, um zu testen, ob Textfragmente in einem Browser unterstützt werden.

Probieren Sie Folgendes in den Entwicklertools eines unterstützenden Browsers aus, in einem Tab mit einem oder mehreren hervorgehobenen Textfragmenten:

```js
document.fragmentDirective;
// returns an empty FragmentDirective object, if supported
// undefined otherwise
```

Diese Funktionalität ist derzeit hauptsächlich für die Feature-Erkennung gedacht. In Zukunft könnte das `FragmentDirective`-Objekt zusätzliche Informationen enthalten.

## Referenz

### API

- [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)
  - : Ein Objekt, das die Textfragmente darstellt. Derzeit leer und hauptsächlich für die Feature-Erkennung gedacht.
- [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective)
  - : Gibt das [`FragmentDirective`](/de/docs/Web/API/FragmentDirective) für das aktuelle Dokument zurück.

### CSS

- {{cssxref("::target-text")}}
  - : Stellt die hervorgehobenen Textfragmente im aktuellen Dokument dar. Es ermöglicht Autoren, das Styling der Textfragmente anzupassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Kühn verlinken, wo noch niemand zuvor verlinkt hat: Textfragmente](https://web.dev/articles/text-fragments)
