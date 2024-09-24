---
title: Textfragmente
slug: Web/URI/Fragment/Text_fragments
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{QuickLinksWithSubpages("/de/docs/Web/URI")}}

**Textfragmente** ermöglichen es, direkt auf einen bestimmten Textabschnitt in einem Webdokument zu verlinken, ohne dass der Autor es mit einer ID versehen muss, indem ein besonderer Syntax im URL-Fragment verwendet wird. Unterstützende Browser können frei wählen, wie sie auf den verlinkten Text aufmerksam machen, z. B. durch farbliche Hervorhebung und/oder Scrollen zum Inhalt auf der Seite. Dies ist nützlich, da es Webinhalt-Autoren erlaubt, tief in andere Inhalte zu verlinken, die sie nicht kontrollieren, ohne auf das Vorhandensein von IDs angewiesen zu sein. Aufbauend darauf könnte es verwendet werden, um effektivere Linksharing-Optionen für Benutzer zu generieren, die diese untereinander weitergeben können.

## Konzepte und Verwendung

Historisch gesehen war eine der wichtigsten Eigenschaften des Webs schon immer die Fähigkeit, Links zwischen verschiedenen Dokumenten bereitzustellen – das ist, was das _Web_ zu einem Netz macht:

- Sie können an die Spitze eines Dokuments verlinken, indem Sie auf dessen URL verweisen, zum Beispiel:
  - [https://developer.mozilla.org/de/docs/Web/HTML/Element/a](/de/docs/Web/HTML/Element/a).
- Sie können auf einen bestimmten Abschnitt eines Dokuments verlinken, indem Sie auf dessen URL plus das _Dokumentenfragment_ (ID) dieses Abschnitts verlinken, zum Beispiel:
  - [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#browser_compatibility](/de/docs/Web/HTML/Element/a#browser_compatibility).

Das Problem beim Verlinken zu bestimmten Dokumentenfragmenten ist, dass der Autor der verlinkten Seite zwingend einen Anker setzen muss, um tatsächlich verlinken zu können. Das zweite oben gezeigte Beispiel verlinkt auf ein {{htmlelement("Heading_Elements", "h2")}}-Element mit der ID `browser_compatibility`:

```html
<h2 id="browser_compatibility">
  <a href="#browser_compatibility">Browser-Kompatibilität</a>
</h2>
```

Wenn die ID geändert oder entfernt wird, wird das Dokumentenfragment ignoriert, und der Link führt einfach zur Spitze der Seite. Dies ist im Sinne der sanften Degradation vernünftig, aber es wäre wohl besser, wenn der Autor des Links die volle Kontrolle darüber hätte, wohin er verlinkt, ohne auf den Seitenautor angewiesen zu sein.

**Textfragmente** machen dies möglich – sie erlauben Linkautoren, Textinhalte anzugeben, zu denen sie verlinken möchten, anstatt Dokumentenfragmente, und das auf eine flexible Weise.

## Syntax

In ähnlicher Weise wie Dokumentenfragmente werden Textfragmente nach einem Rautezeichen (`#`) an eine URL angehängt. Die Syntax ist jedoch etwas anders:

```url
https://example.com#:~:text=[prefix-,]textStart[,textEnd][,-suffix]
```

Die wesentlichen Teile sind wie folgt zu verstehen:

- `:~:`
  - : Auch bekannt als _das Fragment-Direktiv_, diese Zeichenfolge informiert den Browser, dass das Folgende eine oder mehrere Benutzereinheiten-Anweisungen sind, die beim Laden von der URL entfernt werden, sodass Scripts von Autoren nicht direkt mit ihnen interagieren können. Benutzereinheiten-Anweisungen werden auch Direktiven genannt.
- `text=`
  - : Ein Textdirektiv. Es stellt dem Browser ein Textfragment bereit, das definiert, welcher Text im verlinkten Dokument zu verlinken ist.
- `textStart`
  - : Ein Textstring, der den Beginn des verlinkten Textes angibt.
- `textEnd` {{optional_inline}}
  - : Ein Textstring, der das Ende des verlinkten Textes angibt.
- `prefix-` {{optional_inline}}
  - : Ein Textstring gefolgt von einem Bindestrich, der angibt, welcher Text dem verlinkten Text unmittelbar vorausgehen soll, wobei nur Leerzeichen dazwischen erlaubt sind. Dies hilft dem Browser, den korrekten verlinkten Text auszuwählen, falls es mehrere Übereinstimmungen gibt.
- `-suffix` {{optional_inline}}
  - : Ein Bindestrich gefolgt von einem Textstring, der angibt, welcher Text dem verlinkten Text unmittelbar folgen soll, wobei nur Leerzeichen dazwischen erlaubt sind. Dies hilft dem Browser, den korrekten verlinkten Text auszuwählen, falls es mehrere Übereinstimmungen gibt.

Unterstützende Browser werden zu dem ersten Textfragment scrollen und es hervorheben, das dem angegebenen Direktive entspricht. Beachten Sie, dass es möglich ist, mehrere Textfragmente zu spezifizieren, die in derselben URL hervorgehoben werden, indem sie durch Kaufmanns- (`&`) Zeichen getrennt werden.

### Hinweise zur Verwendung

- Textstrings, die für die Werte `textStart`, `textEnd`, `prefix-` und `-suffix` verwendet werden, müssen [prozentkodiert](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) sein.
- Übereinstimmungen sind nicht case-sensitive.
- Einzelne `textStart`, `textEnd`, `prefix-` und `-suffix` Strings müssen vollständig innerhalb desselben [Block-Level-Elements](/de/docs/Glossary/Block-level_content) liegen, aber vollständige Übereinstimmungen können sich über mehrere Elementgrenzen erstrecken.
- Aus Sicherheitsgründen erfordert die Funktionalität, dass Links in einem noopener-Kontext geöffnet werden – Sie müssen `rel="noopener"` zu Ihren {{htmlelement("a")}}-Elementen hinzufügen und `noopener` zu Ihren {{domxref("window.open()")}}-Aufrufen hinzufügen, wenn Sie diese Funktionalität nutzen.
- Textfragmente werden nur bei vollständigen (nicht auf derselben Seite), nutzerinitiierten Navigationen aufgerufen.
- Textfragmente werden nur im Hauptfenster angewendet; Text wird nicht innerhalb von {{htmlelement("iframe")}}s gesucht, und `iframe`-Navigation wird kein Textfragment aufrufen.
- Für Websites, die sich abmelden möchten, unterstützen Chromium-basierte Browser einen [Document-Policy](https://wicg.github.io/document-policy/)-Header-Wert, den sie senden können, sodass Benutzeragenten Textfragmente nicht verarbeiten:

  ```http
  Document-Policy: force-load-at-top
  ```

> [!NOTE]
> Wenn das angegebene Textfragment keinen Text im verlinkten Dokument findet oder wenn der Browser keine Textfragmente unterstützt, wird das gesamte Textfragment ignoriert und die Spitze des Dokuments verlinkt.

## Beispiele

### Einfaches Textfragment mit textStart

- [https://example.com#:~:text=for](https://example.com#:~:text=for) scrollt zur ersten Vorkommen des Textes `for` im Dokument und hebt ihn hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=human](/de/docs/Web/HTML/Element/a#:~:text=human) scrollt zur ersten Vorkommen des Textes `human` im Dokument und hebt ihn hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL](/de/docs/Web/HTML/Element/a#:~:text=linked%20url) scrollt zur ersten Vorkommen des Textes `linked URL` im Dokument und hebt ihn hervor.

### textStart und textEnd

- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=human,URL](/de/docs/Web/HTML/Element/a#:~:text=human,url) scrollt zur ersten Vorkommen einer Textzeichenfolge, die mit `human` beginnt und mit `URL` endet, und hebt sie hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,defining%20a%20value](/de/docs/Web/HTML/Element/a#:~:text=linked%20url,defining%20a%20value) scrollt zur ersten Vorkommen einer Textzeichenfolge, die mit `linked URL` beginnt und mit `defining a value` endet. Beachten Sie, wie der hervorgehobene Text sich über mehrere Block-Level-Elemente erstreckt.

### Beispiele mit prefix- und/oder -suffix

- [https://example.com#:~:text=asking-,for](https://example.com#:~:text=asking-,for) scrollt zur zweiten Vorkommen des Textes `for` im Dokument und hebt ihn hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=sent-,referrer](/de/docs/Web/HTML/Element/a#:~:text=sent-,referrer) scrollt zur ersten Vorkommen des Textes `referrer`, das den Text `sent` direkt davor hat. Dies ist die 5. Vorkommen von `referrer` im Dokument; ohne das Präfix wäre die erste Vorkommen hervorgehoben.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format](/de/docs/Web/HTML/Element/a#:~:text=linked%20url,-'s%20format) scrollt zur ersten Vorkommen des Textes `linked URL`, das den Text `'s format` direkt danach hat. Dies ist die 5. Vorkommen von `linked URL` im Dokument; ohne das Suffix wäre die erste Vorkommen hervorgehoben.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=downgrade:-,The%20Referer,be%20sent,-to%20origins](/de/docs/Web/HTML/Element/a#:~:text=downgrade:-,The%20Referer,be%20sent,-to%20origins) scrollt zur Instanz des Textes `The Referer ... be sent`, die mit `downgrade:` vorangestellt und mit `to origins` nachgestellt ist. Dies illustriert ein komplexeres Beispiel, bei dem das Präfix/Suffix verwendet wird, um die spezifische Textinstanz, die verlinkt werden soll, genauer zu bestimmen. Versuchen Sie, das Präfix zu entfernen, und sehen Sie, was übereinstimmt.

### URLs mit mehreren Textfragmenten

Sie können mehrere Textfragmente in derselben URL angeben, indem Sie sie mit Kaufmanns- (`&`) Zeichen trennen. Schauen wir uns ein paar Beispiele an:

- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=Causes&text=linked](/de/docs/Web/HTML/Element/a#:~:text=causes&text=linked) scrollt zu und hebt die ersten Vorkommen der Textzeichenfolgen `Causes` und `linked` hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format&text=Deprecated-,attributes,attribute](/de/docs/Web/HTML/Element/a#:~:text=linked%20url,-'s%20format&text=Deprecated-,attributes,attribute) scrollt zu und hebt zwei Textinstanzen hervor:
  - Die erste Instanz des Textes `linked URL`, die den Text `'s format` direkt danach hat.
  - Die erste Instanz einer Textzeichenfolge, die mit `attributes` beginnt und mit `attribute` endet, wobei `Deprecated` davor steht.

Wenn Sie eines oder mehrere Ihrer Textfragmente nicht hervorgehoben sehen und sicher sind, dass Sie die Syntax korrekt haben, betonen Sie möglicherweise eine andere Instanz als erwartet. Es könnte hervorgehoben sein, aber außerhalb des Bildschirms.

### Gestalten von hervorgehobenen Textfragmenten

Browser sind frei, den hervorgehobenen Text in welcher Standardweise auch immer sie möchten zu stylen. Das [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo/#selectordef-target-text) definiert ein Pseudo-Element, {{cssxref("::target-text")}}, das Ihnen erlaubt, benutzerdefinierte Stylings anzugeben.

Zum Beispiel haben wir in unserem [scroll-to-text demo](https://mdn.github.io/css-examples/target-text/index.html#:~:text=From%20the%20foregoing%20remarks%20we%20may%20gather%20an%20idea%20of%20the%20importance) das folgende CSS:

```css
::target-text {
  background-color: rebeccapurple;
  color: white;
}
```

Versuchen Sie, den obigen Link in einem unterstützenden Browser zu folgen, um die Wirkung zu sehen, die dies hat.

### Erkennbarkeit der Funktion

Das {{domxref("FragmentDirective")}} Objekt, das über die {{domxref("Document.fragmentDirective")}} Eigenschaft zugänglich ist, kann verwendet werden, um zu testen, ob Textfragmente in einem Browser unterstützt werden.

Versuchen Sie, das folgende in den Devtools eines unterstützenden Browsers in einem Tab mit einem oder mehreren übereinstimmenden Textfragmenten auszuführen:

```js
document.fragmentDirective;
// Gibt ein leeres FragmentDirective-Objekt zurück, wenn unterstützt
// andernfalls undefined
```

Diese Funktionalität ist derzeit hauptsächlich für die Funktionsüberprüfung vorgesehen. In Zukunft könnte das `FragmentDirective`-Objekt zusätzliche Informationen enthalten.

## Referenz

### API

- {{domxref("FragmentDirective")}}
  - : Ein Objekt, das die Textfragmente repräsentiert. Derzeit leer und hauptsächlich für die Funktionsüberprüfung vorgesehen.
- {{domxref("Document.fragmentDirective")}}
  - : Gibt das {{domxref("FragmentDirective")}} für das aktuelle Dokument zurück.

### CSS

- {{cssxref("::target-text")}}
  - : Repräsentiert die hervorgehobenen Textfragmente im aktuellen Dokument. Es erlaubt den Autoren, das Styling von Textfragmenten anzupassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Kühn verlinken, wo bisher niemand verlinkt hat: Textfragmente](https://web.dev/articles/text-fragments)
