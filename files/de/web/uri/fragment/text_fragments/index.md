---
title: Textfragmente
slug: Web/URI/Fragment/Text_fragments
l10n:
  sourceCommit: d16515b1b70946c62568cd890744e560800ded72
---

{{QuickLinksWithSubpages("/de/docs/Web/URI")}}

**Textfragmente** ermöglichen es, direkt auf einen bestimmten Teil eines Textes in einem Webdokument zu verlinken, ohne dass der Autor dieses mit einer ID versehen muss, durch die Verwendung spezieller Syntax im URL-Fragment. Unterstützende Browser können selbst entscheiden, wie sie den verlinkten Text hervorheben, z. B. durch Hervorhebung mit Farbe und/oder Scrollen zum Inhalt auf der Seite. Dies ist nützlich, da es Webinhaltsautoren ermöglicht, einen Tiefenlink zu anderen Inhalten zu erstellen, die sie nicht kontrollieren, ohne auf das Vorhandensein von IDs angewiesen zu sein. Darauf aufbauend könnte dies verwendet werden, um effektivere Links zum Teilen von Inhalten zu generieren, die Benutzer einander weiterleiten können.

## Konzepte und Verwendung

Historisch gesehen war eine der Hauptmerkmale des Webs immer seine Fähigkeit, Links zwischen verschiedenen Dokumenten bereitzustellen — das ist es, was _das Web_ zu einem Netz macht:

- Sie können an die Spitze eines Dokuments verlinken, indem Sie auf dessen URL verlinken, zum Beispiel:
  - [https://developer.mozilla.org/de/docs/Web/HTML/Element/a](/de/docs/Web/HTML/Element/a).
- Sie können auf einen bestimmten Abschnitt eines Dokuments verlinken, indem Sie auf die URL plus das _Dokument-Fragment_ (ID) dieses Abschnitts verlinken, zum Beispiel:
  - [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#browser_compatibility](/de/docs/Web/HTML/Element/a#browser_compatibility).

Das Problem beim Verlinken auf bestimmte Dokumentfragmente liegt darin, dass der Autor der verlinkten Seite einen Anker setzen muss, um _tatsächlich_ darauf zu verlinken. Das zweite Beispiel oben verlinkt auf ein {{htmlelement("Heading_Elements", "h2")}}-Element mit einer ID von `browser_compatibility`:

```html
<h2 id="browser_compatibility">
  <a href="#browser_compatibility">Browser compatibility</a>
</h2>
```

Wenn die ID geändert oder entfernt wird, wird das Dokumentfragment ignoriert und der Link führt nur zur Spitze der Seite. Dies ist in Bezug auf ein sanftes Degradationsverhalten vernünftig, es wäre jedoch besser, wenn der Autor des Links die volle Kontrolle darüber hätte, wohin er verlinkt, ohne auf den Seitenautor angewiesen zu sein.

**Textfragmente** machen dies möglich — Link-Autoren können angeben, auf welchen Textinhalt verlinkt werden soll, anstatt auf Dokumentfragmente, auf eine flexible Weise.

## Syntax

Ähnlich wie bei Dokumentfragmenten werden Textfragmente an eine URL nach einem Hash-Symbol (`#`) angehängt. Die Syntax unterscheidet sich jedoch etwas:

```url
https://example.com#:~:text=[prefix-,]textStart[,textEnd][,-suffix]
```

Die wichtigsten zu verstehenden Teile sind wie folgt:

- `:~:`
  - : Auch als _Fragment-Direktive_ bekannt, signalisiert diese Zeichenfolge dem Browser, dass die nachfolgenden Anweisungen ein oder mehrere Benutzeragenten-Befehle sind, die beim Laden aus der URL entfernt werden, sodass Authoren-Skripte nicht direkt mit ihnen interagieren können. Benutzeragenten-Befehle werden auch als Direktiven bezeichnet.
- `text=`
  - : Eine Text-Direktive. Diese bietet dem Browser ein Textfragment, das definiert, welcher Text im verlinkten Dokument hervorgehoben werden soll.
- `textStart`
  - : Eine Textzeichenfolge, die den Anfang des verlinkten Textes angibt.
- `textEnd` {{optional_inline}}
  - : Eine Textzeichenfolge, die das Ende des verlinkten Textes angibt.
- `prefix-` {{optional_inline}}
  - : Eine Textzeichenfolge gefolgt von einem Bindestrich, die angibt, welcher Text unmittelbar vor dem verlinkten Text stehen sollte, wobei dazwischen nur Leerzeichen zugelassen sind. Dies hilft dem Browser, den richtigen verlinkten Text auszuwählen, falls es mehrere Übereinstimmungen gibt.
- `-suffix` {{optional_inline}}
  - : Ein Bindestrich gefolgt von einer Textzeichenfolge, die angibt, welcher Text unmittelbar nach dem verlinkten Text stehen sollte, wobei dazwischen nur Leerzeichen zugelassen sind. Dies hilft dem Browser, den richtigen verlinkten Text auszuwählen, falls es mehrere Übereinstimmungen gibt.

Unterstützende Browser scrollen zum und heben das erste Textfragment im verlinkten Dokument hervor, das der angegebenen Direktive entspricht. Beachten Sie, dass es möglich ist, mehrere Textfragmente in derselben URL hervorzuheben, indem man sie mit Kaufmanns- (`&`) Zeichen voneinander trennt.

### Nutzungshinweise

- Für die `textStart`, `textEnd`, `prefix-` und `-suffix` Werte verwendete Textzeichenfolgen müssen [prozent-codiert](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) sein.
- Übereinstimmungen sind nicht case-sensitiv.
- Einzelne `textStart`, `textEnd`, `prefix-` und `-suffix` Zeichenfolgen müssen vollständig innerhalb desselben {{Glossary("Block-level_content", "Blockelemen")}} liegen, aber vollständige Übereinstimmungen können über mehrere Elementgrenzen hinweg verlaufen.
- Aus Sicherheitsgründen erfordert die Funktion, dass Links in einem noopener-Kontext geöffnet werden — Sie müssen `rel="noopener"` zu Ihren {{htmlelement("a")}}-Elementen hinzufügen und `noopener` zu Ihren [`window.open()`](/de/docs/Web/API/Window/open) Aufrufen hinzufügen, wenn Sie diese Funktion nutzen.
- Textfragmente werden nur bei benutzerinitiierten Navigationen aufgerufen.
- Textfragmente werden nur auf den Hauptrahmen angewendet; Text wird nicht innerhalb von {{htmlelement("iframe")}}s durchsucht, und `iframe`-Navigationen rufen kein Textfragment auf.
- Für Sites, die sich abmelden möchten, unterstützen Chromium-basierte Browser einen [Document Policy](https://wicg.github.io/document-policy/) Header-Wert, den sie senden können, sodass Benutzeragenten keine Textfragmente verarbeiten:

  ```http
  Document-Policy: force-load-at-top
  ```

> [!NOTE]
> Wenn das bereitgestellte Textfragment mit keinem Text im verlinkten Dokument übereinstimmt oder wenn der Browser keine Textfragmente unterstützt, wird das gesamte Textfragment ignoriert und die Spitze des Dokuments verlinkt.

## Beispiele

### Einfaches Textfragment mit textStart

- [https://example.com#:~:text=for](https://example.com#:~:text=for) scrollt zu und hebt das erste Vorkommen des Textes `for` im Dokument hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=human](/de/docs/Web/HTML/Element/a#:~:text=human) scrollt zu und hebt das erste Vorkommen des Textes `human` im Dokument hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL](/de/docs/Web/HTML/Element/a#:~:text=linked%20URL) scrollt zu und hebt das erste Vorkommen des Textes `linked URL` im Dokument hervor.

### textStart und textEnd

- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=human,URL](/de/docs/Web/HTML/Element/a#:~:text=human,url) scrollt zu und hebt das erste Vorkommen einer Textzeichenfolge hervor, die mit `human` beginnt und mit `URL` endet.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,defining%20a%20value](/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,defining%20a%20value) scrollt zu und hebt das erste Vorkommen einer Textzeichenfolge hervor, die mit `linked URL` beginnt und mit `defining a value` endet. Beachten Sie, wie der hervorgehobene Text sich über mehrere Blockelemente erstreckt.

### Beispiele mit prefix- und/oder -suffix

- [https://example.com#:~:text=asking-,for](https://example.com#:~:text=asking-,for) scrollt zu und hebt das zweite Vorkommen des Textes `for` im Dokument hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=sent-,referrer](/de/docs/Web/HTML/Element/a#:~:text=sent-,referrer) scrollt zu und hebt das erste Vorkommen des Textes `referrer` hervor, das direkt das Wort `sent` davor hat. Dies ist das fünfte Vorkommen von `referrer` im Dokument; ohne das Präfix würde das erste Vorkommen hervorgehoben.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format](/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format) scrollt zu und hebt das erste Vorkommen des Textes `linked URL` hervor, das direkt von `'s format` gefolgt wird. Dies ist das fünfte Vorkommen von `linked URL` im Dokument; ohne das Suffix würde das erste Vorkommen hervorgehoben.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=downgrade:-,The%20Referer,be%20sent,-to%20origins](/de/docs/Web/HTML/Element/a#:~:text=downgrade:-,The%20Referer,be%20sent,-to%20origins) scrollt zu und hebt das Vorkommen des Textes `The Referer ... be sent` hervor, das mit `downgrade:` eingeleitet und mit `to origins` abgeschlossen wird. Dies illustriert ein komplexeres Beispiel, bei dem Präfix/Suffix verwendet werden, um das spezifische Textvorkommen zu finden, auf das Sie verlinken möchten. Versuchen Sie zum Beispiel, das Präfix zu entfernen und zu sehen, was übereinstimmt.

### URLs mit mehreren Textfragmenten

Sie können mehrere Textfragmente in derselben URL angeben, indem Sie sie mit Kaufmanns- (`&`) Zeichen trennen. Schauen wir uns ein paar Beispiele an:

- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=Causes&text=linked](/de/docs/Web/HTML/Element/a#:~:text=causes&text=linked) scrollt zu und hebt die ersten Vorkommen der Textzeichenfolgen `Causes` und `linked` hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format&text=Deprecated-,attributes,attribute](/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format&text=Deprecated-,attributes,attribute) scrollt zu und hebt zwei Textvorkommen hervor:
  - Das erste Vorkommen des Textes `linked URL`, das direkt von `'s format` gefolgt wird.
  - Das erste Vorkommen einer Textzeichenfolge, die mit `attributes` beginnt und mit `attribute` endet, welches mit `Deprecated` eingeleitet wird.

Wenn Sie eines oder mehrere Ihrer Textfragmente nicht hervorgehoben sehen und sicher sind, dass Sie die Syntax richtig haben, könnten Sie ein anderes Vorkommen hervorheben als das, das Sie erwartet haben. Es könnte hervorgehoben sein, aber außerhalb des Bildschirms liegen.

### Stil von übereinstimmenden Textfragmenten

Browser können den hervorgehobenen Text auf beliebige Weise stilvoll darstellen. Das [CSS Pseudo-Elemente Modul Level 4](https://drafts.csswg.org/css-pseudo/#selectordef-target-text) definiert ein Pseudo-Element, {{cssxref("::target-text")}}, das es ermöglicht, benutzerdefiniertes Styling festzulegen.

Zum Beispiel, in unserem [Scroll-to-Text-Demo](https://mdn.github.io/css-examples/target-text/index.html#:~:text=From%20the%20foregoing%20remarks%20we%20may%20gather%20an%20idea%20of%20the%20importance) haben wir das folgende CSS:

```css
::target-text {
  background-color: rebeccapurple;
  color: white;
}
```

Versuchen Sie, den obigen Link in einem unterstützenden Browser zu folgen, um die Wirkung zu sehen.

### Funktionsdetektierbarkeit

Das [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)-Objekt, das über die [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective)-Eigenschaft aufgerufen wird, kann verwendet werden, um zu testen, ob Textfragmente in einem Browser unterstützt werden.

Versuchen Sie, Folgendes in den Entwickler-Tools eines unterstützenden Browsers auszuführen, in einem Tab mit einem oder mehreren übereinstimmenden Textfragmenten:

```js
document.fragmentDirective;
// returns an empty FragmentDirective object, if supported
// undefined otherwise
```

Diese Funktionalität ist derzeit hauptsächlich für die Funktionsdetektion gedacht. In der Zukunft könnte das `FragmentDirective`-Objekt zusätzliche Informationen enthalten.

## Referenz

### API

- [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)
  - : Ein Objekt, das die Textfragmente darstellt. Derzeit leer und hauptsächlich zur Funktionsdetektion gedacht.
- [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective)
  - : Gibt die [`FragmentDirective`](/de/docs/Web/API/FragmentDirective) für das aktuelle Dokument zurück.

### CSS

- {{cssxref("::target-text")}}
  - : Repräsentiert die hervorgehobenen Textfragmente im aktuellen Dokument. Es erlaubt den Autoren, das Styling von Textfragmenten anzupassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Boldly link where no one has linked before: Text Fragments](https://web.dev/articles/text-fragments)
