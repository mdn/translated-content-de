---
title: Textfragmente
slug: Web/URI/Reference/Fragment/Text_fragments
l10n:
  sourceCommit: 8d160cd9847c839ebb2016e082bd3879d5ce904f
---

**Textfragmente** ermöglichen es, direkt auf eine bestimmte Textstelle in einem Webdokument zu verlinken, ohne dass der Autor diese mit einer ID versehen muss, indem eine spezielle Syntax im URL-Fragment verwendet wird. Unterstützende Browser können frei wählen, wie sie den verlinkten Text hervorheben, z. B. durch Farbmarkierung und/oder Scrollen zum Seiteninhalt. Dies ist nützlich, da es Webinhaltsautoren ermöglicht, tiefgreifend auf fremde Inhalte zu verlinken, ohne sich auf IDs verlassen zu müssen. Darüber hinaus könnte dies verwendet werden, um effektivere Links zum Teilen von Inhalten für Nutzer zu generieren.

## Konzepte und Nutzung

Historisch gesehen war eine der Hauptmerkmale des Webs immer seine Fähigkeit, Links zwischen verschiedenen Dokumenten bereitzustellen — das ist es, was _das Web_ zum Web macht:

- Sie können an den Anfang eines Dokuments verlinken, indem Sie auf seine URL verweisen, zum Beispiel:
  - [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a](/de/docs/Web/HTML/Reference/Elements/a).
- Sie können auf einen bestimmten Abschnitt eines Dokuments verlinken, indem Sie seine URL plus das _Dokumentfragment_ (ID) dieses Abschnitts verwenden, zum Beispiel:
  - [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#browser_compatibility](/de/docs/Web/HTML/Reference/Elements/a#browser_compatibility).

Das Problem beim Verlinken auf spezifische Dokumentfragmente ist, dass der Autor der verlinkten Seite einen Anker setzen muss, um tatsächlich verlinken zu können. Das obige zweite Beispiel verlinkt auf ein {{htmlelement("Heading_Elements", "h2")}}-Element mit einer ID von `browser_compatibility`:

```html
<h2 id="browser_compatibility">
  <a href="#browser_compatibility">Browser compatibility</a>
</h2>
```

Wenn die ID geändert oder entfernt wird, wird das Dokumentfragment ignoriert und der Link führt einfach zum Anfang der Seite. Dies ist insofern vernünftig, als dass es eine angemessene Verschlechterung der Funktionen darstellt, aber es wäre besser, wenn der Autor des Links volle Kontrolle darüber hätte, wohin er verlinkt, ohne auf den Seitenautor angewiesen zu sein.

**Textfragmente** machen dies möglich — sie erlauben es Linkautoren, Textinhalte statt Dokumentfragmente zum Verlinken anzugeben.

## Syntax

Ähnlich wie bei Dokumentfragmenten werden Textfragmente nach einem Rautenzeichen (`#`) an eine URL angehängt. Die Syntax ist jedoch etwas anders:

```url
https://example.com#:~:text=[prefix-,]textStart[,textEnd][,-suffix]
```

Die wichtigsten Teile, die es zu verstehen gilt, sind wie folgt:

- `:~:`
  - : Auch bekannt als _das Fragmentdirektiv_, teilt diese Zeichenfolge dem Browser mit, dass das Folgende eine oder mehrere Benutzeranweisungen sind, die beim Laden aus der URL entfernt werden, damit Autorenskripte nicht direkt damit interagieren können. Benutzeranweisungen werden auch Direktiven genannt.
- `text=`
  - : Eine Textdirektive. Diese liefert dem Browser ein Textfragment, das definiert, welcher Text im verlinkten Dokument verlinkt werden soll.
- `textStart`
  - : Eine Textzeichenfolge, die den Anfang des verlinkten Textes angibt.
- `textEnd` {{optional_inline}}
  - : Eine Textzeichenfolge, die das Ende des verlinkten Textes angibt.
- `prefix-` {{optional_inline}}
  - : Eine Textzeichenfolge, gefolgt von einem Bindestrich, die angibt, welcher Text unmittelbar vor dem verlinkten Text stehen soll, wobei dazwischen nur Leerzeichen erlaubt sind. Dies hilft dem Browser, den richtigen verlinkten Text auszuwählen, falls es mehrere Übereinstimmungen gibt.
- `-suffix` {{optional_inline}}
  - : Ein Bindestrich, gefolgt von einer Textzeichenfolge, die angibt, welcher Text unmittelbar nach dem verlinkten Text stehen soll, wobei dazwischen nur Leerzeichen erlaubt sind. Dies hilft dem Browser, den richtigen verlinkten Text auszuwählen, falls es mehrere Übereinstimmungen gibt.

Unterstützende Browser scrollen zum ersten Textfragment im verlinkten Dokument, das der angegebenen Direktive entspricht, und heben es hervor. Beachten Sie, dass es möglich ist, mehrere Textfragmente im Rahmen derselben URL hervorzuheben, indem sie mit dem Zeichen "&" verbunden werden.

### Nutzungshinweise

- Textzeichenfolgen, die für die Werte `textStart`, `textEnd`, `prefix-` und `-suffix` verwendet werden, müssen [prozentcodiert](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) sein. Darüber hinaus verlangt [der Standard](https://wicg.github.io/scroll-to-text-fragment/#syntax), dass der URL-sichere Bindestrich `'-'` ebenfalls prozentcodiert wird.
- Übereinstimmungen sind nicht case-sensitiv.
- Einzelne `textStart`, `textEnd`, `prefix-` und `-suffix` Zeichenfolgen müssen vollständig innerhalb desselben {{Glossary("Block-level_content", "block-level element")}} liegen, aber vollständige Übereinstimmungen können über mehrere Elementgrenzen hinweg gehen.
- Aus Sicherheitsgründen sollten Sie, wenn Sie mit dieser Funktion auf eine externe Seite verlinken, den Link in einem `noopener`-Kontext öffnen – Sie müssen `rel="noopener"` zu Ihren {{htmlelement("a")}}-Elementen hinzufügen und `noopener` in Ihren [`window.open()`](/de/docs/Web/API/Window/open)-Aufrufen verwenden, wenn Sie diese Funktion nutzen.
- Textfragmente werden nur bei nutzerinitiierten Navigationen aufgerufen.
- Textfragmente werden nur auf den Hauptframe angewendet; Text wird nicht innerhalb von {{htmlelement("iframe")}}s durchsucht, und `iframe`-Navigation ruft kein Textfragment auf.
- Für Websites, die sich abmelden möchten, unterstützen Chromium-basierte Browser einen [Document Policy](https://wicg.github.io/document-policy/) Header-Wert, den sie senden können, damit Benutzeragenten keine Textfragmente verarbeiten:

  ```http
  Document-Policy: force-load-at-top
  ```

> [!NOTE]
> Wenn das angegebene Textfragment mit keinem Text im verlinkten Dokument übereinstimmt oder der Browser keine Textfragmente unterstützt, wird das gesamte Textfragment ignoriert und der Anfang des Dokuments verlinkt.

## Beispiele

### Textfragment mit textStart

- [https://example.com/#:~:text=for](https://example.com/#:~:text=for) scrollt zur ersten Instanz des Textes `for` im Dokument und hebt ihn hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=human](/de/docs/Web/HTML/Reference/Elements/a#:~:text=human) scrollt zur ersten Instanz des Textes `human` im Dokument und hebt ihn hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL](/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL) scrollt zur ersten Instanz des Textes `linked URL` im Dokument und hebt ihn hervor.

### textStart und textEnd

- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=human,URL](/de/docs/Web/HTML/Reference/Elements/a#:~:text=human,url) scrollt zur ersten Instanz einer Textzeichenfolge, die mit `human` beginnt und mit `URL` endet, und hebt sie hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,defining%20a%20value](/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,defining%20a%20value) scrollt zur ersten Instanz einer Textzeichenfolge, die mit `linked URL` beginnt und mit `defining a value` endet, und hebt sie hervor. Beachten Sie, wie der hervorgehobene Text über mehrere block-level Elemente hinweg spannt.

### Beispiele mit prefix- und/oder -suffix

- [https://example.com/#:~:text=asking-,for](https://example.com/#:~:text=asking-,for) scrollt zur zweiten Instanz des Textes `for` im Dokument und hebt ihn hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=sent-,referrer](/de/docs/Web/HTML/Reference/Elements/a#:~:text=sent-,referrer) scrollt zur ersten Instanz des Textes `referrer`, die direkt vorher den Text `sent` hat. Dies ist die 5. Instanz von `referrer` im Dokument; ohne das Präfix würde die erste Instanz hervorgehoben werden.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,-'s%20format](/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,-'s%20format) scrollt zur ersten Instanz des Textes `linked URL`, die direkt folgend den Text `'s format` hat. Dies ist die 5. Instanz von `linked URL` im Dokument; ohne das Suffix würde die erste Instanz hervorgehoben werden.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=downgrade:-,The%20Referer,be%20sent,-to%20origins](/de/docs/Web/HTML/Reference/Elements/a#:~:text=downgrade:-,The%20Referer,be%20sent,-to%20origins) scrollt zur Instanz des Textes `The Referer ... be sent`, die mit `downgrade:` präfixiert und mit `to origins` suffiziert ist. Dies veranschaulicht ein komplexeres Beispiel, bei dem Präfix/Suffix verwendet werden, um sich auf die spezifische Textinstanz zu konzentrieren, auf die Sie verlinken möchten. Versuchen Sie, das Präfix zu entfernen und zu sehen, was dann übereinstimmt.

### URLs mit mehreren Textfragmenten

Sie können mehrere Textfragmente, die in derselben URL hervorgehoben werden sollen, durch Verknüpfen mit dem Zeichen "&" angeben. Schauen wir uns ein paar Beispiele an:

- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=Causes&text=linked](/de/docs/Web/HTML/Reference/Elements/a#:~:text=causes&text=linked) scrollt zu und hebt die ersten Instanzen der Textzeichenfolgen `Causes` und `linked` hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,-'s%20format&text=Deprecated-,attributes,attribute](/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,-'s%20format&text=Deprecated-,attributes,attribute) scrollt zu und hebt zwei Textinstanzen hervor:
  - Die erste Instanz des Textes `linked URL`, die direkt folgend den Text `'s format` hat.
  - Die erste Instanz einer Textzeichenfolge, die mit `attributes` beginnt und mit `attribute` endet, und mit `Deprecated` präfixiert ist.

Wenn eines oder mehrere Ihrer Textfragmente nicht hervorgehoben werden und Sie sicher sind, dass Sie die Syntax korrekt haben, heben Sie möglicherweise eine andere Instanz hervor als erwartet. Sie könnte hervorgehoben sein, aber außerhalb des Bildschirms liegen.

### Stil der hervorgehobenen Textfragmente

Browser sind frei, den hervorgehobenen Text auf irgendeine Standardweise zu gestalten. Das [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo/#selectordef-target-text) definiert ein Pseudo-Element, {{cssxref("::target-text")}}, das die Möglichkeit bietet, eine benutzerdefinierte Gestaltung festzulegen.

Zum Beispiel verwenden wir in unserem [scroll-to-text-Demo](https://mdn.github.io/css-examples/target-text/index.html#:~:text=From%20the%20foregoing%20remarks%20we%20may%20gather%20an%20idea%20of%20the%20importance) folgendes CSS:

```css
::target-text {
  background-color: rebeccapurple;
  color: white;
}
```

Versuchen Sie, den obigen Link in einem unterstützenden Browser zu folgen, um den Effekt zu sehen, den dies hat.

### Erkennbarkeit der Funktion

Das [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)-Objekt, das über die [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective)-Eigenschaft zugänglich ist, kann verwendet werden, um zu testen, ob Textfragmente in einem Browser unterstützt werden.

Versuchen Sie, das folgende in den Devtools eines unterstützenden Browsers in einem Tab mit einem oder mehreren hervorgehobenen Textfragmenten auszuführen:

```js
document.fragmentDirective;
// returns an empty FragmentDirective object, if supported
// undefined otherwise
```

Diese Funktionalität ist derzeit hauptsächlich für die Funktionserkennung vorgesehen. In Zukunft könnte das `FragmentDirective`-Objekt zusätzliche Informationen enthalten.

## Referenz

### API

- [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)
  - : Ein Objekt, das die Textfragmente darstellt. Derzeit leer und hauptsächlich zur Funktionserkennung gedacht.
- [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective)
  - : Gibt das [`FragmentDirective`](/de/docs/Web/API/FragmentDirective) für das aktuelle Dokument zurück.

### CSS

- {{cssxref("::target-text")}}
  - : Stellt die hervorgehobenen Textfragmente im aktuellen Dokument dar. Es erlaubt Autoren, die Gestaltung der Textfragmente anzupassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Kühn verlinken, wo niemand zuvor verlinkt hat: Textfragmente](https://web.dev/articles/text-fragments)
