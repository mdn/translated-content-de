---
title: Textfragmente
slug: Web/URI/Reference/Fragment/Text_fragments
l10n:
  sourceCommit: d54f8c9ecfbafc35915330ac4e26a09d93d814e8
---

**Textfragmente** ermöglichen das direkte Verlinken zu einem bestimmten Textabschnitt in einem Webdokument, ohne dass der Autor es mit einer ID annotieren muss, indem eine spezielle Syntax im URL-Fragment verwendet wird. Unterstützende Browser haben die Freiheit zu entscheiden, wie sie auf den verlinkten Text aufmerksam machen, z.B. durch eine Farbmarkierung und/oder indem sie zum Inhalt auf der Seite scrollen. Dies ist nützlich, da es Webautoren ermöglicht, tief in andere Inhalte zu verlinken, die sie nicht kontrollieren, ohne auf das Vorhandensein von IDs angewiesen zu sein. Darüber hinaus könnte es verwendet werden, um effektivere Content-Sharing-Links zu generieren, die Benutzer untereinander austauschen können.

## Konzepte und Nutzung

Historisch gesehen war eine der Hauptfunktionen des Webs immer die Fähigkeit, Links zwischen verschiedenen Dokumenten bereitzustellen — das macht das _Web_ zu einem Web:

- Sie können einen Link oben in einem Dokument setzen, indem Sie auf seine URL verlinken, zum Beispiel:
  - [https://developer.mozilla.org/de/docs/Web/HTML/Element/a](/de/docs/Web/HTML/Element/a).
- Sie können auf einen bestimmten Abschnitt eines Dokuments verlinken, indem Sie auf seine URL plus das _Dokumentfragment_ (ID) dieses Abschnitts verlinken, zum Beispiel:
  - [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#browser_compatibility](/de/docs/Web/HTML/Element/a#browser_compatibility).

Das Problem beim Verlinken auf spezifische Dokumentfragmente besteht darin, dass der Autor der verlinkten Seite eine Anker setzen muss, um _tatsächlich_ darauf verlinken zu können. Das zweite Beispiel oben verlinkt ein {{htmlelement("Heading_Elements", "h2")}}-Element mit einer ID von `browser_compatibility`:

```html
<h2 id="browser_compatibility">
  <a href="#browser_compatibility">Browser compatibility</a>
</h2>
```

Wenn die ID geändert oder entfernt wird, wird das Dokumentfragment ignoriert, und der Link führt einfach nur zur Oberseite der Seite. Dies ist im Sinne der schrittweisen Degradation vernünftig, aber es wäre wohl besser, wenn der Urheber des Links die volle Kontrolle darüber hätte, wohin sie verlinken, ohne auf den Seitenautor angewiesen zu sein.

**Textfragmente** machen dies zur Realität — sie ermöglichen es Linkautoren, den Textinhalt anzugeben, zu dem sie verlinken möchten, anstatt Dokumentfragmenten auf flexible Weise.

## Syntax

Ähnlich wie Dokumentfragmente werden Textfragmente nach einem Rautezeichen (`#`) an eine URL angehängt. Die Syntax ist jedoch etwas anders:

```url
https://example.com#:~:text=[prefix-,]textStart[,textEnd][,-suffix]
```

Die wichtigsten Teile, die Sie verstehen müssen, sind wie folgt:

- `:~:`
  - : Auch bekannt als _das Fragment-Direktiv_, diese Zeichensequenz teilt dem Browser mit, dass das, was als nächstes kommt, eine oder mehrere User-Agent-Anweisungen sind, die während des Ladens aus der URL entfernt werden, sodass Autorenskripte nicht direkt mit ihnen interagieren können. User-Agent-Anweisungen werden auch als Direktiven bezeichnet.
- `text=`
  - : Eine Text-Direktive. Dies stellt dem Browser ein Textfragment zur Verfügung, das definiert, zu welchem Text im verlinkten Dokument verlinkt werden soll.
- `textStart`
  - : Eine Textzeichenfolge, die den Beginn des verlinkten Textes angibt.
- `textEnd` {{optional_inline}}
  - : Eine Textzeichenfolge, die das Ende des verlinkten Textes angibt.
- `prefix-` {{optional_inline}}
  - : Eine Textzeichenfolge, gefolgt von einem Bindestrich, gibt an, welcher Text dem verlinkten Text unmittelbar vorausgehen soll, wobei nur Leerzeichen dazwischen erlaubt sind. Dies hilft dem Browser, den richtigen verlinkten Text auszuwählen, falls es mehrere Übereinstimmungen gibt.
- `-suffix` {{optional_inline}}
  - : Ein Bindestrich gefolgt von einer Textzeichenfolge, die angibt, welcher Text dem verlinkten Text unmittelbar folgen soll, wobei nur Leerzeichen dazwischen erlaubt sind. Dies hilft dem Browser, den richtigen verlinkten Text auszuwählen, falls es mehrere Übereinstimmungen gibt.

Unterstützende Browser scrollen zu und markieren das erste Textfragment im verlinkten Dokument, das der angegebenen Direktive entspricht. Beachten Sie, dass es möglich ist, mehrere Textfragmente im selben URL zu spezifizieren, indem sie mit einem Kaufmännischen Und-Zeichen (`&`) getrennt werden.

### Nutzungshinweise

- Textzeichenfolgen, die für die Werte `textStart`, `textEnd`, `prefix-` und `-suffix` verwendet werden, müssen [prozentkodiert](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) sein. Darüber hinaus erfordert [der Standard](https://wicg.github.io/scroll-to-text-fragment/#syntax), dass das URL-sichere Bindestrichzeichen `'-'` ähnlich prozentkodiert wird.
- Übereinstimmungen sind nicht groß-/kleinschreibungssensitiv.
- Einzelne `textStart`-, `textEnd`-, `prefix-`- und `-suffix`-Zeichenfolgen müssen sich vollständig innerhalb desselben {{Glossary("Block-level_content", "Block-Level-Elements")}} befinden, aber vollständige Übereinstimmungen können mehrere Elementgrenzen überspannen.
- Aus Sicherheitsgründen erfordert das Feature, dass Links in einem noopener-Kontext geöffnet werden — Sie müssen `rel="noopener"` zu Ihren {{htmlelement("a")}}-Elementen hinzufügen und `noopener` zu Ihren [`window.open()`](/de/docs/Web/API/Window/open)-Aufrufen hinzufügen, wenn Sie dieses Feature nutzen.
- Textfragmente werden nur bei benutzerinitiierten Navigationen aufgerufen.
- Textfragmente werden nur auf den Hauptframe angewendet; Text wird nicht innerhalb von {{htmlelement("iframe")}}s gesucht, und `iframe`-Navigation wird kein Textfragment aufrufen.
- Für Websites, die sich abmelden möchten, unterstützen Chromium-basierte Browser einen [Document Policy](https://wicg.github.io/document-policy/)-Headerwert, den sie senden können, damit User Agents keine Textfragmente verarbeiten:

  ```http
  Document-Policy: force-load-at-top
  ```

> [!NOTE]
> Wenn das bereitgestellte Textfragment mit keinem Text im verlinkten Dokument übereinstimmt oder wenn der Browser Textfragmente nicht unterstützt, wird das gesamte Textfragment ignoriert und der Anfang des Dokuments wird verlinkt.

## Beispiele

### Textfragment mit textStart

- [https://example.com#:~:text=for](https://example.com#:~:text=for) scrollt zu und markiert das erste Vorkommen des Textes `for` im Dokument.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=human](/de/docs/Web/HTML/Element/a#:~:text=human) scrollt zu und markiert das erste Vorkommen des Textes `human` im Dokument.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL](/de/docs/Web/HTML/Element/a#:~:text=linked%20URL) scrollt zu und markiert das erste Vorkommen des Textes `linked URL` im Dokument.

### textStart und textEnd

- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=human,URL](/de/docs/Web/HTML/Element/a#:~:text=human,url) scrollt zu und markiert die erste Instanz einer Textzeichenkette, die mit `human` beginnt und mit `URL` endet.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,defining%20a%20value](/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,defining%20a%20value) scrollt zu und markiert die erste Instanz einer Textzeichenkette, die mit `linked URL` beginnt und mit `defining a value` endet. Beachten Sie, wie der markierte Text mehrere Blocklevel-Elemente überspannt.

### Beispiele mit prefix- und/oder -suffix

- [https://example.com#:~:text=asking-,for](https://example.com#:~:text=asking-,for) scrollt zu und markiert die zweite Instanz des Textes `for` im Dokument.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=sent-,referrer](/de/docs/Web/HTML/Element/a#:~:text=sent-,referrer) scrollt zu und markiert die erste Instanz des Textes `referrer`, die den Text `sent` direkt davor hat. Dies ist die 5. Instanz von `referrer` im Dokument; ohne das Prefix würde die erste Instanz markiert werden.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format](/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format) scrollt zu und markiert die erste Instanz des Textes `linked URL`, der den Text `'s format` direkt danach hat. Dies ist die 5. Instanz von `linked URL` im Dokument; ohne das Suffix würde die erste Instanz markiert werden.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=downgrade:-,The%20Referer,be%20sent,-to%20origins](/de/docs/Web/HTML/Element/a#:~:text=downgrade:-,The%20Referer,be%20sent,-to%20origins) scrollt zu und markiert die Instanz des Textes `The Referer ... be sent`, die von `downgrade:` eingeleitet und von `to origins` abgeschlossen wird. Dies zeigt ein komplexeres Beispiel, bei dem Prefix/Suffix verwendet werden, um die spezifische Textinstanz zu finden, auf die Sie verlinken möchten. Versuchen Sie, das Prefix zu entfernen und sehen Sie, was übereinstimmt.

### URLs mit mehreren Textfragmenten

Sie können mehrere Textfragmente spezifizieren, die im selben URL markiert werden, indem sie mit Kaufmännischen Und-Zeichen (`&`) getrennt werden. Schauen wir uns ein paar Beispiele an:

- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=Causes&text=linked](/de/docs/Web/HTML/Element/a#:~:text=causes&text=linked) scrollt zu und markiert die ersten Instanzen der Textzeichenfolgen `Causes` und `linked`.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format&text=Deprecated-,attributes,attribute](/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format&text=Deprecated-,attributes,attribute) scrollt zu und markiert zwei Textinstanzen:
  - Die erste Instanz des Textes `linked URL`, der den Text `'s format` direkt danach hat.
  - Die erste Instanz einer Textzeichenkette, die mit `attributes` beginnt und mit `attribute` endet, wobei sie von `Deprecated` eingeleitet wird.

Wenn Sie eines oder mehrere Ihrer Textfragmente nicht markiert sehen und sicher sind, dass Sie die Syntax richtig haben, könnte es sein, dass Sie eine andere Instanz markieren als die, die Sie erwartet haben. Es könnte markiert sein, aber ausserhalb des Bildschirms.

### Stil der übereinstimmenden Textfragmente

Browser sind frei, den markierten Text auf beliebige Weise zu gestalten. Das [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo/#selectordef-target-text) definiert ein Pseudo-Element, {{cssxref("::target-text")}}, das es Ihnen erlaubt, das Styling anzupassen.

Zum Beispiel haben wir in unserem [scroll-to-text-Demo](https://mdn.github.io/css-examples/target-text/index.html#:~:text=From%20the%20foregoing%20remarks%20we%20may%20gather%20an%20idea%20of%20the%20importance) folgendes CSS:

```css
::target-text {
  background-color: rebeccapurple;
  color: white;
}
```

Versuchen Sie, den obigen Link in einem unterstützenden Browser zu öffnen, um die Wirkung zu sehen.

### Feature-Erkennbarkeit

Das [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)-Objekt, das über die [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective)-Eigenschaft aufgerufen wird, kann verwendet werden, um zu testen, ob Textfragmente in einem Browser unterstützt werden.

Versuchen Sie, das Folgende in den Entwicklertools eines unterstützenden Browsers auszuführen, in einem Tab mit einem oder mehreren passenden Textfragmenten:

```js
document.fragmentDirective;
// returns an empty FragmentDirective object, if supported
// undefined otherwise
```

Diese Funktionalität ist derzeit hauptsächlich für die Feature-Erkennung vorgesehen. In Zukunft könnte das `FragmentDirective`-Objekt zusätzliche Informationen enthalten.

## Referenz

### API

- [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)
  - : Ein Objekt, das die Textfragmente darstellt. Derzeit leer und hauptsächlich für die Feature-Erkennung vorgesehen.
- [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective)
  - : Gibt die [`FragmentDirective`](/de/docs/Web/API/FragmentDirective) für das aktuelle Dokument zurück.

### CSS

- {{cssxref("::target-text")}}
  - : Stellt die markierten Textfragmente im aktuellen Dokument dar. Es erlaubt Autoren, das Styling von Textfragmenten anzupassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Kühn verlinken, wo noch niemand zuvor verlinkt hat: Textfragmente](https://web.dev/articles/text-fragments)
