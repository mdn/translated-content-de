---
title: Textfragmente
slug: Web/URI/Fragment/Text_fragments
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{QuickLinksWithSubpages("/de/docs/Web/URI")}}

**Textfragmente** ermöglichen es, direkt zu einem bestimmten Textabschnitt in einem Webdokument zu verlinken, ohne dass der Autor diesen mit einer ID versehen muss, indem eine spezielle Syntax im URL-Fragment verwendet wird. Unterstützende Browser können frei wählen, wie sie den verlinkten Text hervorheben, z. B. durch farbliche Hervorhebung und/oder Scrollen zum Inhalt auf der Seite. Dies ist nützlich, da es Webautoren ermöglicht, tief in Inhalte zu verlinken, die sie nicht kontrollieren, ohne auf IDs angewiesen zu sein, um dies zu ermöglichen. Auf dieser Basis könnte es verwendet werden, um effektivere Links zum Teilen von Inhalten zu generieren, die Nutzer miteinander austauschen können.

## Konzepte und Verwendung

Historisch gesehen war eine der Schlüsselmerkmale des Internets immer seine Fähigkeit, Links zwischen verschiedenen Dokumenten bereitzustellen—es ist, was das _Web_ zu einem Netz macht:

- Sie können an die Spitze eines Dokuments verlinken, indem Sie zu seiner URL verlinken, zum Beispiel:
  - [https://developer.mozilla.org/de/docs/Web/HTML/Element/a](/de/docs/Web/HTML/Element/a).
- Sie können an einen bestimmten Abschnitt eines Dokuments verlinken, indem Sie zu seiner URL plus dem _Dokumentfragment_ (ID) dieses Abschnitts verlinken, zum Beispiel:
  - [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#browser_compatibility](/de/docs/Web/HTML/Element/a#browser_compatibility).

Das Problem beim Verlinken auf spezifische Dokumentfragmente besteht darin, dass der Autor der verlinkten Seite einen Anker setzen muss, um tatsächlich dorthin verlinken zu können. Das zweite Beispiel oben verlinkt auf ein {{htmlelement("Heading_Elements", "h2")}}-Element mit der ID `browser_compatibility`:

```html
<h2 id="browser_compatibility">
  <a href="#browser_compatibility">Browser compatibility</a>
</h2>
```

Wenn die ID geändert oder entfernt wird, wird das Dokumentfragment ignoriert, und der Link führt einfach zur Spitze der Seite. Dies ist hinsichtlich der schrittweisen Degradation vernünftig, aber es wäre zweifellos besser, wenn der Linkautor volle Kontrolle darüber hätte, wohin er verlinkt, ohne auf den Seitenautor angewiesen zu sein.

**Textfragmente** machen dies Realität — sie erlauben es Linkautoren, Textinhalte anzugeben, zu denen verlinkt werden soll, anstatt sich auf Dokumentfragmente zu verlassen, in flexibler Weise.

## Syntax

Ähnlich wie Dokumentfragmente werden Textfragmente an eine URL nach einem Rautezeichen (`#`) angehängt. Die Syntax ist jedoch etwas anders:

```url
https://example.com#:~:text=[prefix-,]textStart[,textEnd][,-suffix]
```

Die Schlüsselkomponenten sind wie folgt zu verstehen:

- `:~:`
  - : Auch bekannt als _das Fragmentdirektiv_, diese Zeichenfolge signalisiert dem Browser, dass das Folgende eine oder mehrere Benutzeragenten-Anweisungen sind, die während des Ladens aus der URL entfernt werden, sodass Autorenskripte nicht direkt mit ihnen interagieren können. Benutzeragenten-Anweisungen werden auch als Direktiven bezeichnet.
- `text=`
  - : Eine Textanweisung. Dies stellt dem Browser ein Textfragment bereit, das definiert, welcher Text im verlinkten Dokument verlinkt werden soll.
- `textStart`
  - : Eine Textzeichenfolge, die den Beginn des verlinkten Textes angibt.
- `textEnd` {{optional_inline}}
  - : Eine Textzeichenfolge, die das Ende des verlinkten Textes angibt.
- `prefix-` {{optional_inline}}
  - : Eine Textzeichenfolge, gefolgt von einem Bindestrich, die angibt, welcher Text dem verlinkten Text unmittelbar vorangehen soll, wobei nur Leerzeichen dazwischen erlaubt sind. Dies hilft dem Browser, den korrekten verlinkten Text auszuwählen, falls es mehrere Übereinstimmungen gibt.
- `-suffix` {{optional_inline}}
  - : Ein Bindestrich, gefolgt von einer Textzeichenfolge, die angibt, welcher Text dem verlinkten Text unmittelbar folgen soll, wobei nur Leerzeichen dazwischen erlaubt sind. Dies hilft dem Browser, den korrekten verlinkten Text auszuwählen, falls es mehrere Übereinstimmungen gibt.

Unterstützende Browser scrollen zum ersten Textfragment im verlinkten Dokument, das der angegebenen Direktive entspricht, und heben es hervor. Beachten Sie, dass es möglich ist, mehrere Textfragmente in derselben URL anzugeben, indem sie mit dem Zeichen `&` voneinander getrennt werden.

### Verwendungshinweise

- Die Textzeichenfolgen, die für die Werte `textStart`, `textEnd`, `prefix-`, und `-suffix` verwendet werden, müssen [prozentkodiert](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) sein.
- Übereinstimmungen sind nicht case-sensitiv.
- Einzelne `textStart`, `textEnd`, `prefix-`, und `-suffix`-Zeichenfolgen müssen vollständig innerhalb desselben [Block-Elementes](/de/docs/Glossary/Block-level_content) liegen, aber vollständige Übereinstimmungen können sich über mehrere Elementgrenzen erstrecken.
- Aus Sicherheitsgründen erfordert das Feature, dass Links in einem noopener-Kontext geöffnet werden — Sie müssen `rel="noopener"` zu Ihren {{htmlelement("a")}}-Elementen hinzufügen und `noopener` zu Ihren [`window.open()`](/de/docs/Web/API/Window/open)-Aufrufen hinzufügen, wenn Sie diese Funktion verwenden.
- Textfragmente werden nur bei vollständigen (nicht auf derselben Seite) und benutzerinitiierten Navigationen aufgerufen.
- Textfragmente werden nur auf den Hauptframe angewendet; Text wird nicht innerhalb von {{htmlelement("iframe")}}s durchsucht, und die Navigation in `iframe` ruft kein Textfragment auf.
- Für Websites, die sich abmelden möchten, unterstützen Chromium-basierte Browser einen [Document Policy](https://wicg.github.io/document-policy/)-Headerwert, den sie senden können, sodass Benutzeragenten keine Textfragmente verarbeiten:

  ```http
  Document-Policy: force-load-at-top
  ```

> [!NOTE]
> Wenn das bereitgestellte Textfragment keinem Text im verlinkten Dokument entspricht oder wenn der Browser Textfragmente nicht unterstützt, wird das gesamte Textfragment ignoriert und die Spitze des Dokuments verlinkt.

## Beispiele

### Einfaches Textfragment mit textStart

- [https://example.com#:~:text=for](https://example.com#:~:text=for) scrollt zur ersten Vorkommen des Textes `for` im Dokument und hebt ihn hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=human](/de/docs/Web/HTML/Element/a#:~:text=human) scrollt zur ersten Vorkommen des Textes `human` im Dokument und hebt ihn hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL](/de/docs/Web/HTML/Element/a#:~:text=linked%20URL) scrollt zur ersten Vorkommen des Textes `linked URL` im Dokument und hebt ihn hervor.

### textStart und textEnd

- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=human,URL](/de/docs/Web/HTML/Element/a#:~:text=human,url) scrollt zur ersten Vorkommen einer Textzeichenfolge, die mit `human` beginnt und mit `URL` endet und hebt sie hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,defining%20a%20value](/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,defining%20a%20value) scrollt zur ersten Vorkommen einer Textzeichenfolge, die mit `linked URL` beginnt und mit `defining a value` endet und hebt sie hervor. Beachten Sie, wie der hervorgehobene Text sich über mehrere Block-Elemente erstreckt.

### Beispiele mit prefix- und/oder -suffix

- [https://example.com#:~:text=asking-,for](https://example.com#:~:text=asking-,for) scrollt zur zweiten Vorkommen des Textes `for` im Dokument und hebt ihn hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=sent-,referrer](/de/docs/Web/HTML/Element/a#:~:text=sent-,referrer) scrollt zur ersten Vorkommen des Textes `referrer`, der den Text `sent` unmittelbar davor hat. Dies ist die 5. Vorkommen von `referrer` im Dokument; ohne das Prefix würde die erste Vorkommen hervorgehoben.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format](/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format) scrollt zur ersten Vorkommen des Textes `linked URL`, der den Text `'s format` unmittelbar danach hat. Dies ist die 5. Vorkommen von `linked URL` im Dokument; ohne das Suffix würde die erste Vorkommen hervorgehoben.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=downgrade:-,The%20Referer,be%20sent,-to%20origins](/de/docs/Web/HTML/Element/a#:~:text=downgrade:-,The%20Referer,be%20sent,-to%20origins) scrollt zur Vorkommen des Textes `The Referer ... be sent`, der durch `downgrade:` eingeleitet und durch `to origins` abgeschlossen wird. Dies veranschaulicht ein komplexeres Beispiel, bei dem das Prefix/Suffix verwendet wird, um die spezielle Textvorkommen, auf die Sie verlinken möchten, zu lokalisieren. Versuchen Sie, das Prefix zu entfernen, um zu sehen, was übereinstimmt.

### URLs mit mehreren Textfragmenten

Sie können mehrere Textfragmente hervorheben, indem Sie sie in derselben URL durch das Zeichen `&` trennen. Schauen wir uns ein paar Beispiele an:

- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=Causes&text=linked](/de/docs/Web/HTML/Element/a#:~:text=causes&text=linked) scrollt zu und hebt die ersten Vorkommen der Textzeichenfolgen `Causes` und `linked` hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format&text=Deprecated-,attributes,attribute](/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format&text=Deprecated-,attributes,attribute) scrollt zu und hebt zwei Textvorkommen hervor:
  - Die erste Vorkommen des Textes `linked URL`, die den Text `'s format` unmittelbar danach hat.
  - Die erste Vorkommen einer Textzeichenfolge, die mit `attributes` beginnt und mit `attribute` endet, die durch `Deprecated` eingeleitet wird.

Wenn Sie eines oder mehrere Ihrer Textfragmente nicht hervorgehoben sehen und sicher sind, dass Sie die Syntax korrekt haben, könnten Sie einfach eine andere Vorkommen hervorheben als die, die Sie erwarteten. Es könnte hervorgehoben sein, aber außerhalb des Bildschirms.

### Styling von hervorgehobenen Textfragmenten

Browser können das hervorgehobene Text in einer beliebigen Standardweise gestalten. Das [CSS Pseudo-Elemente Modul Level 4](https://drafts.csswg.org/css-pseudo/#selectordef-target-text) definiert ein Pseudo-Element, {{cssxref("::target-text")}}, das es erlaubt, eine benutzerdefinierte Gestaltung festzulegen.

Zum Beispiel haben wir in unserem [scroll-to-text Demo](https://mdn.github.io/css-examples/target-text/index.html#:~:text=From%20the%20foregoing%20remarks%20we%20may%20gather%20an%20idea%20of%20the%20importance) das folgende CSS:

```css
::target-text {
  background-color: rebeccapurple;
  color: white;
}
```

Versuchen Sie, den obigen Link in einem unterstützenden Browser zu folgen, um den Effekt zu sehen, den dies hat.

### Funktionserkennung

Das [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)-Objekt, das über die [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective)-Eigenschaft abgerufen wird, kann verwendet werden, um zu testen, ob Textfragmente in einem Browser unterstützt werden oder nicht.

Versuchen Sie, das Folgende in den Entwicklertools eines unterstützenden Browsers in einem Tab mit einem oder mehreren passenden Textfragmenten auszuführen:

```js
document.fragmentDirective;
// returns an empty FragmentDirective object, if supported
// undefined otherwise
```

Diese Funktionalität ist derzeit hauptsächlich für die Funktionserkennung gedacht. In Zukunft könnte das `FragmentDirective`-Objekt zusätzliche Informationen enthalten.

## Referenz

### API

- [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)
  - : Ein Objekt, das die Textfragmente repräsentiert. Derzeit leer und hauptsächlich für die Funktionserkennung gedacht.
- [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective)
  - : Gibt das [`FragmentDirective`](/de/docs/Web/API/FragmentDirective) für das aktuelle Dokument zurück.

### CSS

- {{cssxref("::target-text")}}
  - : Repräsentiert die hervorgehobenen Textfragmente im aktuellen Dokument. Es erlaubt Autoren, die Gestaltung von Textfragmenten anzupassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Linken Sie mutig dorthin, wo noch niemand verlinkt hat: Textfragmente](https://web.dev/articles/text-fragments)
