---
title: Textfragmente
slug: Web/URI/Reference/Fragment/Text_fragments
l10n:
  sourceCommit: b2a6a2d255b792532d1cd3edf224f204d1ab2251
---

**Textfragmente** verlinken direkt zu einem bestimmten Text auf einer Webseite, ohne dass der Seitenautor eine ID hinzufügen muss. Sie verwenden eine spezielle Syntax im URL-Fragment. Diese Funktion ermöglicht es Ihnen, Deep-Links zu Inhalten zu erstellen, die Sie nicht kontrollieren und die möglicherweise keine zugehörigen IDs haben. Es macht das Teilen von Links auch nützlicher, indem es andere direkt auf bestimmte Wörter verweist. Browser können unterschiedlich darauf hinweisen, welcher Text verlinkt ist – normalerweise wird der Text in den sichtbaren Bereich gescrollt und farblich hervorgehoben.

## Konzepte und Verwendung

Historisch gesehen war eine der Hauptmerkmale des Webs immer seine Fähigkeit, Links zwischen verschiedenen Dokumenten bereitzustellen – das ist es, was _das Web_ zu einem Netz macht:

- Sie können an den Anfang eines Dokuments verlinken, indem Sie auf seine URL verlinken, zum Beispiel:
  - [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a](/de/docs/Web/HTML/Reference/Elements/a).
- Sie können an einen bestimmten Abschnitt eines Dokuments verlinken, indem Sie auf seine URL plus das _Dokumentfragment_ (ID) dieses Abschnitts verlinken, zum Beispiel:
  - [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#browser_compatibility](/de/docs/Web/HTML/Reference/Elements/a#browser_compatibility).

Das Problem beim Verlinken auf spezifische Dokumentfragmente ist, dass der Autor der verlinkten Seite einen Anker setzen muss, um _tatsächlich_ darauf zu verlinken. Das obige zweite Beispiel verlinkt auf ein {{htmlelement("Heading_Elements", "h2")}}-Element mit einer ID von `browser_compatibility`:

```html
<h2 id="browser_compatibility">
  <a href="#browser_compatibility">Browser compatibility</a>
</h2>
```

Nicht alle Dokumente haben solche Anker, und selbst wenn sie es tun, kann das Verlinken auf eine Überschrift viel weniger offensichtlich sein als das direkte Verlinken auf den spezifischen Text, den Sie zitieren. Hier kommen Textfragmente zum Einsatz: Sie erlauben es dem Linkautor, die volle Kontrolle darüber zu haben, auf welchen Text verwiesen wird, ohne dass spezielles Markup im Zieldokument erforderlich ist. Beispielsweise kann eine Suchmaschine auf einen bestimmten Satz in ihren Suchergebnissen verweisen und das Klicken auf den Link führt Sie direkt zu diesem Satz.

Textfragmente haben jedoch auch eine Einschränkung: Text in einem Dokument ist weniger stabil als die Dokumentstruktur. Wenn der Text im verlinkten Dokument aktualisiert wird, passt das Fragment nicht mehr und der Browser navigiert zum Anfang der Seite. Das ist akzeptabel für temporäre Links wie in Suchergebnissen, aber wenn Sie möchten, dass der Link über die Zeit zuverlässig funktioniert, sind Dokumentfragmente möglicherweise verlässlicher.

## Syntax

```url
https://example.com#:~:text=[prefix-,]textStart[,textEnd][,-suffix]
```

Textfragmente sind eine Art URL-Fragment und werden nach dem `#` geschrieben. Die wichtigsten Punkte zum Verständnis sind folgende:

- `:~:`
  - : Auch bekannt als _Fragmentanweisung_, teilt diese Zeichenfolge dem Browser mit, dass das, was folgt, eine oder mehrere User-Agent-Anweisungen sind, die beim Laden von der URL entfernt werden, sodass Autorenskripte nicht direkt mit ihnen interagieren können. User-Agent-Anweisungen werden auch als Anweisungen bezeichnet.
- `text=`
  - : Eine Textanweisung. Diese stellt dem Browser ein Textfragment zur Verfügung und definiert, welcher Text im verlinkten Dokument verlinkt werden soll.
- `textStart`
  - : Eine Zeichenkette, die den Anfang des verlinkten Textes angibt.
- `textEnd` {{optional_inline}}
  - : Eine Zeichenkette, die das Ende des verlinkten Textes angibt.
- `prefix-` {{optional_inline}}
  - : Eine Zeichenkette gefolgt von einem Bindestrich, die angibt, welcher Text unmittelbar vor dem verlinkten Text stehen sollte, wobei nur Leerzeichen dazwischen erlaubt sind. Dies hilft dem Browser, den richtigen verlinkten Text zu wählen, wenn es mehrere Übereinstimmungen gibt.
- `-suffix` {{optional_inline}}
  - : Ein Bindestrich gefolgt von einer Zeichenkette, die angibt, welcher Text unmittelbar nach dem verlinkten Text stehen sollte, wobei nur Leerzeichen dazwischen erlaubt sind. Dies hilft dem Browser, den richtigen verlinkten Text zu wählen, wenn es mehrere Übereinstimmungen gibt.

Unterstützende Browser scrollen zum ersten Textfragment im verlinkten Dokument, das der angegebenen Anweisung entspricht, und heben es hervor. Beachten Sie, dass es möglich ist, mehrere Textfragmente in derselben URL anzugeben, indem sie mit dem Zeichen (`&`) getrennt werden.

### Verwendungshinweise

- Für die in `textStart`, `textEnd`, `prefix-` und `-suffix` verwendeten Zeichenketten müssen [prozentcodiert](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) sein. Darüber hinaus erfordert [der Standard](https://wicg.github.io/scroll-to-text-fragment/#syntax), dass das URL-sichere Bindestrichzeichen `'-'` ähnlich prozentcodiert wird.
- Übereinstimmungen sind Groß-/Kleinschreibung-unabhängig.
- Einzelne `textStart`, `textEnd`, `prefix-` und `-suffix` Zeichenketten müssen vollständig innerhalb desselben {{Glossary("Block-level_content", "Block-Level-Element")}} enthalten sein, aber vollständige Übereinstimmungen können sich über mehrere Elementgrenzen erstrecken.
- Aus Sicherheitsgründen sollten Sie beim Verlinken auf eine Cross-Origin-Seite mit dieser Funktion den Link in einem `noopener`-Kontext öffnen – Sie müssen `rel="noopener"` zu Ihren {{htmlelement("a")}}-Elementen hinzufügen und `noopener` zu Ihren [`window.open()`](/de/docs/Web/API/Window/open)-Aufrufen hinzufügen, wenn Sie diese Funktion verwenden.
- Textfragmente werden nur bei vom Benutzer initiierten Navigationen aufgerufen.
- Textfragmente werden nur auf den Hauptrahmen angewendet; Text wird nicht innerhalb von {{htmlelement("iframe")}}s durchsucht und `iframe`-Navigation wird kein Textfragment aufrufen.
- Für Websites, die sich davon abmelden möchten, unterstützen Chromium-basierte Browser einen [Document Policy](https://wicg.github.io/document-policy/) Header-Wert, den sie senden können, sodass User-Agents keine Textfragmente verarbeiten:

  ```http
  Document-Policy: force-load-at-top
  ```

> [!NOTE]
> Wenn das bereitgestellte Textfragment keinem Text im verlinkten Dokument entspricht oder wenn der Browser Textfragmente nicht unterstützt, wird das gesamte Textfragment ignoriert und der Anfang des Dokuments wird verlinkt.

## Beispiele

### Textfragment mit textStart

- [https://example.com/#:~:text=use](https://example.com/#:~:text=use) scrollt zum ersten Vorkommen des Textes `use` im Dokument und hebt ihn hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=human](/de/docs/Web/HTML/Reference/Elements/a#:~:text=human) scrollt zum ersten Vorkommen des Textes `human` im Dokument und hebt ihn hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL](/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL) scrollt zum ersten Vorkommen des Textes `linked URL` im Dokument und hebt ihn hervor.

### textStart und textEnd

- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=human,URL](/de/docs/Web/HTML/Reference/Elements/a#:~:text=human,url) scrollt zur ersten Instanz einer Zeichenkette, die mit `human` beginnt und mit `URL` endet, und hebt sie hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,defining%20a%20value](/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,defining%20a%20value) scrollt zur ersten Instanz einer Zeichenkette, die mit `linked URL` beginnt und mit `defining a value` endet, und hebt sie hervor. Beachten Sie, wie der hervorgehobene Text sich über mehrere Block-Level-Elemente erstreckt.

### Beispiele mit prefix- und/oder -suffix

- [https://example.com/#:~:text=avoid-,use](https://example.com/#:~:text=avoid-,use) scrollt zur zweiten Instanz des Textes `use` im Dokument und hebt ihn hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=sent-,referrer](/de/docs/Web/HTML/Reference/Elements/a#:~:text=sent-,referrer) scrollt zur ersten Instanz des Textes `referrer`, der den Text `sent` direkt davor hat. Dies ist die fünfte Instanz von `referrer` im Dokument; ohne das Präfix würde die erste Instanz hervorgehoben.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,-'s%20format](/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,-'s%20format) scrollt zur ersten Instanz des Textes `linked URL`, der den Text `'s format` direkt folgt. Dies ist die fünfte Instanz von `linked URL` im Dokument; ohne das Suffix würde die erste Instanz hervorgehoben.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=downgrade:-,The%20Referer,be%20sent,-to%20origins](/de/docs/Web/HTML/Reference/Elements/a#:~:text=downgrade:-,The%20Referer,be%20sent,-to%20origins) scrollt zur Instanz des Textes `The Referer ... be sent`, die mit `downgrade:` beginnt und mit `to origins` endet. Dies ist ein komplexeres Beispiel, bei dem das Präfix/Suffix verwendet wird, um auf die spezifische Textinstanz zu verweisen, die Sie verlinken möchten. Versuchen Sie, das Präfix zu entfernen und sehen Sie, was übereinstimmt.

### URLs mit mehreren Textfragmenten

Sie können mehrere Textfragmente in derselben URL angeben, indem Sie sie mit dem Zeichen (`&`) trennen. Schauen wir uns ein paar Beispiele an:

- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=Causes&text=linked](/de/docs/Web/HTML/Reference/Elements/a#:~:text=causes&text=linked) scrollt zu und hebt die ersten Instanzen der Textzeichenketten `Causes` und `linked` hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,-'s%20format&text=Deprecated-,attributes,attribute](/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,-'s%20format&text=Deprecated-,attributes,attribute) scrollt zu und hebt zwei Textinstanzen hervor:
  - Die erste Instanz des Textes `linked URL`, der den Text `'s format` direkt folgt.
  - Die erste Instanz einer Zeichenkette, die mit `attributes` beginnt und mit `attribute` endet, die mit `Deprecated` gekennzeichnet ist.

Wenn Sie eines oder mehrere Ihrer Textfragmente nicht hervorgehoben sehen und sicher sind, dass Sie die Syntax korrekt haben, können Sie möglicherweise eine andere Instanz hervorheben als die, die Sie erwartet haben. Es könnte hervorgehoben sein, aber außerhalb des sichtbaren Bereichs.

### Styling von hervorgehobenen Textfragmenten

Browser sind frei, den hervorgehobenen Text auf beliebige Standardweise zu gestalten. Das [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo/#selectordef-target-text) definiert ein Pseudo-Element, {{cssxref("::target-text")}}, das es ermöglicht, benutzerdefinierte Stile anzugeben.

Zum Beispiel haben wir in unserem [scroll-to-text-Demo](https://mdn.github.io/css-examples/target-text/index.html#:~:text=From%20the%20foregoing%20remarks%20we%20may%20gather%20an%20idea%20of%20the%20importance), den folgenden CSS-Code:

```css
::target-text {
  background-color: rebeccapurple;
  color: white;
}
```

Versuchen Sie, den obigen Link in einem unterstützenden Browser zu folgen, um zu sehen, welchen Effekt dies hat.

### Funktionsdetektierbarkeit

Das [`FragmentDirective`](/de/docs/Web/API/FragmentDirective) Objekt, das über die [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective) Eigenschaft zugegriffen wird, kann verwendet werden, um zu testen, ob Textfragmente in einem Browser unterstützt werden.

Versuchen Sie, das folgende in den Entwicklertools eines unterstützenden Browsers auszuführen, in einem Tab mit einem oder mehreren übereinstimmenden Textfragmenten:

```js
document.fragmentDirective;
// returns an empty FragmentDirective object, if supported
// undefined otherwise
```

Diese Funktionalität ist derzeit hauptsächlich zur Feature-Erkennung vorgesehen. In Zukunft könnte das `FragmentDirective`-Objekt zusätzliche Informationen enthalten.

## Referenz

### API

- [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)
  - : Ein Objekt, das die Textfragmente darstellt. Derzeit leer und hauptsächlich zur Feature-Erkennung gedacht.
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

- [Kühn dort verlinken, wo noch niemand zuvor verlinkt hat: Textfragmente](https://web.dev/articles/text-fragments)
