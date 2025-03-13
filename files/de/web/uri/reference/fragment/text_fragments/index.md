---
title: Textfragmente
slug: Web/URI/Reference/Fragment/Text_fragments
l10n:
  sourceCommit: 26e46f8c13ebea65dc65a6e99e51e8fa4d5d619d
---

**Textfragmente** ermöglichen es, direkt auf einen bestimmten Abschnitt eines Webdokuments zu verlinken, ohne dass der Autor es mit einer ID versehen muss, indem eine spezielle Syntax im URL-Fragment verwendet wird. Unterstützende Browser können frei entscheiden, wie sie auf den verlinkten Text aufmerksam machen, z. B. durch farbliche Hervorhebung und/oder durch Scrollen zum Inhalt auf der Seite. Dies ist nützlich, da es Webinhaltsautoren ermöglicht, tiefgreifende Links zu Inhalten zu erstellen, die sie nicht kontrollieren, ohne auf die Präsenz von IDs angewiesen zu sein, um dies zu ermöglichen. Darauf aufbauend könnten effektivere Inhaltsfreigabe-Links für Benutzer erstellt werden, die sie einander weitergeben können.

## Konzepte und Nutzung

Historisch gesehen war die Fähigkeit des Webs, Links zwischen verschiedenen Dokumenten bereitzustellen, immer eine seiner Schlüsselmerkmale – es ist das, was das _Web_ zu einem Netz macht:

- Sie können an den Anfang eines Dokuments verlinken, indem Sie auf seine URL verlinken, zum Beispiel:
  - [https://developer.mozilla.org/de/docs/Web/HTML/Element/a](/de/docs/Web/HTML/Element/a).
- Sie können auf einen bestimmten Abschnitt eines Dokuments verlinken, indem Sie auf seine URL plus das _Dokumentfragment_ (ID) dieses Abschnitts verlinken, zum Beispiel:
  - [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#browser_compatibility](/de/docs/Web/HTML/Element/a#browser_compatibility).

Das Problem beim Verlinken auf bestimmte Dokumentfragmente besteht darin, dass der Autor der verlinkten Seite eine Verankerung bereitstellen muss, um tatsächlich darauf zu verlinken. Das obige zweite Beispiel verweist auf ein {{htmlelement("Heading_Elements", "h2")}} Element mit der ID `browser_compatibility`:

```html
<h2 id="browser_compatibility">
  <a href="#browser_compatibility">Browser compatibility</a>
</h2>
```

Wenn die ID geändert oder entfernt wird, wird das Dokumentfragment ignoriert, und der Link verweist einfach an den Anfang der Seite. Dies ist in Bezug auf den stufenweisen Abbau sinnvoll, aber es wäre zweifellos besser, wenn der Verfasser des Links die volle Kontrolle darüber hätte, wohin er verlinkt, ohne auf den Seitenautor angewiesen zu sein.

**Textfragmente** machen dies möglich — sie erlauben Linkautoren, Textinhalte anzugeben, auf die verlinkt werden soll, anstatt auf Dokumentfragmente, und das auf flexible Weise.

## Syntax

Ähnlich wie bei Dokumentfragmenten werden Textfragmente nach einem Rautensymbol (`#`) zu einer URL hinzugefügt. Die Syntax ist jedoch etwas anders:

```url
https://example.com#:~:text=[prefix-,]textStart[,textEnd][,-suffix]
```

Die wichtigsten Teile sind wie folgt zu verstehen:

- `:~:`
  - : Auch bekannt als _Fragmentdirektive_, weist diese Zeichenfolge den Browser an, dass die nächsten Einträge eine oder mehrere Benutzeragenten-Anweisungen sind, die während des Ladevorgangs aus der URL entfernt werden, sodass Autorenskripte nicht direkt damit interagieren können. Benutzeragenten-Anweisungen werden auch Direktiven genannt.
- `text=`
  - : Eine Textdirektive. Sie stellt dem Browser ein Textfragment zur Verfügung und definiert, welcher Text im verlinkten Dokument verlinkt werden soll.
- `textStart`
  - : Eine Textzeichenfolge, die den Anfang des verlinkten Textes angibt.
- `textEnd` {{optional_inline}}
  - : Eine Textzeichenfolge, die das Ende des verlinkten Textes angibt.
- `prefix-` {{optional_inline}}
  - : Eine Textzeichenfolge gefolgt von einem Bindestrich, der angibt, welcher Text unmittelbar vor dem verlinkten Text stehen soll, wobei nur Leerzeichen dazwischen erlaubt sind. Dies hilft dem Browser, den korrekten verlinkten Text zu wählen, in Fällen, in denen es mehrere Übereinstimmungen gibt.
- `-suffix` {{optional_inline}}
  - : Ein Bindestrich gefolgt von einer Textzeichenfolge, die angibt, welcher Text unmittelbar dem verlinkten Text folgen soll, wobei nur Leerzeichen dazwischen erlaubt sind. Dies hilft dem Browser, den korrekten verlinkten Text zu wählen, in Fällen, in denen es mehrere Übereinstimmungen gibt.

Unterstützende Browser scrollen zum ersten Textfragment im verlinkten Dokument, das mit der angegebenen Direktive übereinstimmt, und heben es hervor. Beachten Sie, dass es möglich ist, mehrere Textfragmente anzugeben, die in derselben URL hervorgehoben werden sollen, indem sie mit kaufmännischen Und-Zeichen (`&`) getrennt werden.

### Nutzungshinweise

- Textzeichenfolgen, die für die Werte `textStart`, `textEnd`, `prefix-` und `-suffix` verwendet werden, müssen [prozentcodiert](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) sein. Zusätzlich schreibt [der Standard](https://wicg.github.io/scroll-to-text-fragment/#syntax) vor, dass der URL-sichere Bindestrich `'-'` ebenfalls prozentcodiert werden muss.
- Übereinstimmungen sind nicht case-sensitiv.
- Individuelle `textStart`, `textEnd`, `prefix-` und `-suffix` Zeichenfolgen müssen vollständig innerhalb desselben {{Glossary("Block-level_content", "Blocklevel-Elements")}} liegen, aber vollständige Übereinstimmungen können sich über mehrere Elementgrenzen erstrecken.
- Aus Sicherheitsgründen erfordert die Funktion, dass Links in einem noopener-Kontext geöffnet werden — Sie müssen `rel="noopener"` zu Ihren {{htmlelement("a")}} Elementen hinzufügen und `noopener` zu Ihren [`window.open()`](/de/docs/Web/API/Window/open) Aufrufen, wenn Sie diese Funktion nutzen.
- Textfragmente werden nur bei nutzerinitiierten Navigierungen aufgerufen.
- Textfragmente werden nur auf dem Hauptframe angewendet; Text wird nicht in {{htmlelement("iframe")}}s durchsucht, und `iframe`-Navigationen rufen kein Textfragment auf.
- Für Websites, die sich abmelden möchten, unterstützen auf Chromium basierende Browser einen [Document Policy](https://wicg.github.io/document-policy/) Header-Wert, den sie senden können, damit Benutzeragenten Textfragmente nicht verarbeiten:

  ```http
  Document-Policy: force-load-at-top
  ```

> [!NOTE]
> Wenn das bereitgestellte Textfragment keinem Text im verlinkten Dokument entspricht oder wenn der Browser keine Textfragmente unterstützt, wird das gesamte Textfragment ignoriert und an den Anfang des Dokuments verlinkt.

## Beispiele

### Textfragment mit textStart

- [https://example.com#:~:text=for](https://example.com#:~:text=for) scrollt zur und hebt die erste Instanz des Textes `for` im Dokument hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=human](/de/docs/Web/HTML/Element/a#:~:text=human) scrollt zur und hebt die erste Instanz des Textes `human` im Dokument hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL](/de/docs/Web/HTML/Element/a#:~:text=linked%20URL) scrollt zur und hebt die erste Instanz des Textes `linked URL` im Dokument hervor.

### textStart und textEnd

- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=human,URL](/de/docs/Web/HTML/Element/a#:~:text=human,url) scrollt zur und hebt die erste Instanz einer Textzeichenfolge hervor, die mit `human` beginnt und mit `URL` endet.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,defining%20a%20value](/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,defining%20a%20value) scrollt zur und hebt die erste Instanz einer Textzeichenfolge hervor, die mit `linked URL` beginnt und mit `defining a value` endet. Beachten Sie, wie sich der hervorgehobene Text über mehrere Blocklevel-Elemente erstreckt.

### Beispiele mit prefix- und/oder -suffix

- [https://example.com#:~:text=asking-,for](https://example.com#:~:text=asking-,for) scrollt zur und hebt die zweite Instanz des Textes `for` im Dokument hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=sent-,referrer](/de/docs/Web/HTML/Element/a#:~:text=sent-,referrer) scrollt zur und hebt die erste Instanz des Textes `referrer` hervor, der den Text `sent` direkt davor stehen hat. Dies ist die fünfte Instanz von `referrer` im Dokument; ohne den Präfix würde die erste Instanz hervorgehoben.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format](/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format) scrollt zur und hebt die erste Instanz des Textes `linked URL` hervor, der direkt danach den Text `'s format` stehen hat. Dies ist die fünfte Instanz von `linked URL` im Dokument; ohne den Suffix würde die erste Instanz hervorgehoben.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=downgrade:-,The%20Referer,be%20sent,-to%20origins](/de/docs/Web/HTML/Element/a#:~:text=downgrade:-,The%20Referer,be%20sent,-to%20origins) scrollt zur und hebt die Instanz des Textes `The Referer ... be sent` hervor, die durch `downgrade:` präfixiert und durch `to origins` suffigiert ist. Dies illustriert ein komplexeres Beispiel, bei dem der Präfix/Suffix verwendet wird, um die spezifische Textinstanz, auf die Sie verlinken möchten, genau zu bestimmen. Versuchen Sie, den Präfix zu entfernen, und sehen Sie, was angezeigt wird.

### URLs mit mehreren Textfragmenten

Sie können mehrere Textfragmente angeben, die in derselben URL hervorgehoben werden sollen, indem Sie sie mit kaufmännischen Und-Zeichen (`&`) trennen. Schauen wir uns ein paar Beispiele an:

- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=Causes&text=linked](/de/docs/Web/HTML/Element/a#:~:text=causes&text=linked) scrollt zu und hebt die ersten Instanzen der Textzeichenfolgen `Causes` und `linked` hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format&text=Deprecated-,attributes,attribute](/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format&text=Deprecated-,attributes,attribute) scrollt zu und hebt zwei Textinstanzen hervor:
  - Die erste Instanz des Textes `linked URL`, der direkt danach den Text `'s format` stehen hat.
  - Die erste Instanz einer Textzeichenfolge, die mit `attributes` beginnt und mit `attribute` endet, und durch `Deprecated` präfixiert ist.

Wenn Sie eine oder mehrere Ihrer Textfragmente nicht hervorgehoben sehen und sicher sind, dass Sie die Syntax korrekt haben, könnten Sie einfach eine andere Instanz hervorheben als die, die Sie erwartet haben. Es könnte hervorgehoben sein, aber außerhalb des Bildschirms sein.

### Styling von hervorgehobenen Textfragmenten

Browser sind frei, den hervorgehobenen Text auf beliebige Standardweise zu gestalten. Das [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo/#selectordef-target-text) definiert ein Pseudoelement, {{cssxref("::target-text")}}, das es Ihnen ermöglicht, benutzerdefiniertes Styling zu spezifizieren.

Zum Beispiel, in unserem [scroll-to-text demo](https://mdn.github.io/css-examples/target-text/index.html#:~:text=From%20the%20foregoing%20remarks%20we%20may%20gather%20an%20idea%20of%20the%20importance) haben wir folgendes CSS:

```css
::target-text {
  background-color: rebeccapurple;
  color: white;
}
```

Versuchen Sie, den obigen Link in einem unterstützenden Browser zu folgen, um den Effekt zu sehen, den dies hat.

### Erkennbarkeit der Funktionen

Das Objekt [`FragmentDirective`](/de/docs/Web/API/FragmentDirective), das über die Eigenschaft [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective) aufgerufen wird, kann verwendet werden, um zu testen, ob Textfragmente in einem Browser unterstützt werden.

Versuchen Sie, das Folgende in den Devtools eines unterstützenden Browsers auszuführen, in einem Tab mit einem oder mehreren übereinstimmenden Textfragmenten:

```js
document.fragmentDirective;
// returns an empty FragmentDirective object, if supported
// undefined otherwise
```

Diese Funktionalität ist derzeit hauptsächlich für die Erkennung von Funktionen gedacht. In Zukunft könnte das `FragmentDirective`-Objekt zusätzliche Informationen enthalten.

## Referenz

### API

- [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)
  - : Ein Objekt, das die Textfragmente repräsentiert. Derzeit leer und hauptsächlich für die Erkennung von Funktionen gedacht.
- [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective)
  - : Gibt das [`FragmentDirective`](/de/docs/Web/API/FragmentDirective) für das aktuelle Dokument zurück.

### CSS

- {{cssxref("::target-text")}}
  - : Repräsentiert die hervorgehobenen Textfragmente im aktuellen Dokument. Ermöglicht es Autoren, das Styling der Textfragmente anzupassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Kühn dort verlinken, wo noch niemand verlinkt hat: Textfragmente](https://web.dev/articles/text-fragments)
