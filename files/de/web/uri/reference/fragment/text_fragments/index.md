---
title: Textfragmente
slug: Web/URI/Reference/Fragment/Text_fragments
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

**Textfragmente** ermöglichen das direkte Verlinken auf einen bestimmten Textabschnitt in einem Webdokument, ohne dass der Autor diesen mit einer ID versehen muss, indem eine spezielle Syntax im URL-Fragment verwendet wird. Unterstützende Browser können frei entscheiden, wie sie den verlinkten Text hervorheben, z. B. durch Farbmarkierungen und/oder das Scrollen zum Inhalt der Seite. Dies ist nützlich, da es Webcontent-Autoren ermöglicht, Deep-Links zu Inhalten zu erstellen, die sie nicht kontrollieren, ohne auf IDs angewiesen zu sein, um dies zu ermöglichen. Darüber hinaus könnten damit effektivere Content-Sharing-Links generiert werden, die von Benutzern miteinander geteilt werden können.

## Konzepte und Nutzung

Historisch gesehen war eine der Hauptfunktionen des Webs schon immer seine Fähigkeit, Verknüpfungen zwischen verschiedenen Dokumenten bereitzustellen – das ist es, was _das Web_ zu einem Netz macht:

- Sie können an den Anfang eines Dokuments verlinken, indem Sie seine URL verwenden, z. B.:
  - [https://developer.mozilla.org/de/docs/Web/HTML/Element/a](/de/docs/Web/HTML/Element/a).
- Sie können an einen bestimmten Abschnitt eines Dokuments verlinken, indem Sie seine URL plus das _Dokumentenfragment_ (ID) dieses Abschnitts verwenden, z. B.:
  - [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#browser_compatibility](/de/docs/Web/HTML/Element/a#browser_compatibility).

Das Problem beim Verlinken auf spezifische Dokumentenfragmente besteht darin, dass der Autor der verlinkten Seite einen Anker setzen muss, um tatsächlich dorthin zu verlinken. Das zweite Beispiel oben verlinkt auf ein {{htmlelement("Heading_Elements", "h2")}}-Element mit der ID `browser_compatibility`:

```html
<h2 id="browser_compatibility">
  <a href="#browser_compatibility">Browser compatibility</a>
</h2>
```

Wenn die ID geändert oder entfernt wird, wird das Dokumentenfragment ignoriert, und der Link verweist lediglich auf den Anfang der Seite. Dies ist im Sinne einer robusten Degradation sinnvoll, aber es wäre besser, wenn der Autor des Links volle Kontrolle darüber hätte, wohin er verlinkt, ohne von der Seitengestaltung abhängig zu sein.

**Textfragmente** machen dies möglich – sie erlauben es Linkautoren, einen Textinhalt anzugeben, auf den verlinkt werden soll, anstatt Dokumentenfragmente in einer flexiblen Weise zu verwenden.

## Syntax

Ähnlich wie bei Dokumentenfragmenten werden Textfragmente nach einem Hash-Symbol (`#`) an eine URL angehängt. Allerdings ist die Syntax ein wenig anders:

```url
https://example.com#:~:text=[prefix-,]textStart[,textEnd][,-suffix]
```

Die Schlüsselelemente sind wie folgt:

- `:~:`
  - : Auch bekannt als _Fragment-Direktive_, informiert diese Zeichenfolge den Browser darüber, dass die folgenden Inhalte eine oder mehrere Benutzeragent-Anweisungen beinhalten, die während des Ladens von der URL entfernt werden, sodass Skripte des Autors nicht direkt mit ihnen interagieren können. Benutzeragent-Anweisungen werden auch Direktiven genannt.
- `text=`
  - : Eine Text-Direktive. Sie definiert ein Textfragment, das an den Browser übermittelt wird, und legt fest, welcher Text im verlinkten Dokument hervorgehoben werden soll.
- `textStart`
  - : Eine Textzeichenfolge, die den Anfang des verlinkten Abschnitts definiert.
- `textEnd` {{optional_inline}}
  - : Eine Textzeichenfolge, die das Ende des verlinkten Abschnitts definiert.
- `prefix-` {{optional_inline}}
  - : Eine Textzeichenfolge gefolgt von einem Bindestrich, die angibt, welcher Text unmittelbar vor dem verlinkten Abschnitt erscheinen soll. Dies hilft dem Browser, den korrekten Textabschnitt auszuwählen, wenn es mehrere Übereinstimmungen gibt.
- `-suffix` {{optional_inline}}
  - : Ein Bindestrich gefolgt von einer Textzeichenfolge, die angibt, welcher Text unmittelbar nach dem verlinkten Abschnitt erscheinen soll. Dies hilft dem Browser, den korrekten Textabschnitt auszuwählen, wenn es mehrere Übereinstimmungen gibt.

Unterstützende Browser scrollen zu und heben das erste Textfragment im verlinkten Dokument hervor, das mit der angegebenen Direktive übereinstimmt. Es ist möglich, mehrere Textfragmente in derselben URL anzugeben, indem sie mit einem `&`-Zeichen getrennt werden.

### Nutzungshinweise

- Textzeichenfolgen, die für die Werte von `textStart`, `textEnd`, `prefix-` und `-suffix` verwendet werden, müssen [prozentkodiert](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) werden. Außerdem verlangt [der Standard](https://wicg.github.io/scroll-to-text-fragment/#syntax) die Zeichen `'-'` als URL-sichere Zeichen ebenfalls zu prozentkodieren.
- Übereinstimmungen sind Groß-/Kleinschreibung-unabhängig.
- Einzelne `textStart`-, `textEnd`-, `prefix-`- und `-suffix`-Textzeichenfolgen müssen vollständig innerhalb desselben {{Glossary("Block-level_content", "Block-Elementes")}} liegen, aber vollständige Übereinstimmungen können sich über mehrere Elementgrenzen erstrecken.
- Aus Sicherheitsgründen erfordert die Funktion, dass Links in einem noopener-Kontext geöffnet werden – es muss `rel="noopener"` zu Ihren {{htmlelement("a")}}-Elementen hinzugefügt werden, sowie `noopener` in Ihren [`window.open()`](/de/docs/Web/API/Window/open)-Aufrufen.
- Textfragmente werden nur bei durch den Nutzer initiierten Navigationsaufrufen ausgelöst.
- Textfragmente werden nur auf das Haupt-Frame angewendet; Text wird nicht in {{htmlelement("iframe")}}s durchsucht, und die Navigation in `iframe`-Elementen führt kein Textfragment aus.
- Für Seiten, die sich abmelden möchten, unterstützen Chromium-basierte Browser einen [Document-Policy](https://wicg.github.io/document-policy/)-Headerwert, der übermittelt werden kann, um zu verhindern, dass Benutzeragenten Textfragmente verarbeiten:

  ```http
  Document-Policy: force-load-at-top
  ```

> [!NOTE]
> Wenn das angegebene Textfragment mit keinem Text im verlinkten Dokument übereinstimmt oder wenn der Browser Textfragmente nicht unterstützt, wird das gesamte Textfragment ignoriert, und der Link verweist lediglich auf den Anfang des Dokuments.

## Beispiele

### Einfaches Textfragment mit textStart

- [https://example.com#:~:text=for](https://example.com#:~:text=for) scrollt zum ersten Vorkommen des Texts `for` im Dokument und hebt ihn hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=human](/de/docs/Web/HTML/Element/a#:~:text=human) scrollt zum ersten Vorkommen des Texts `human` im Dokument und hebt ihn hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL](/de/docs/Web/HTML/Element/a#:~:text=linked%20URL) scrollt zum ersten Vorkommen des Texts `linked URL` im Dokument und hebt ihn hervor.

### textStart und textEnd

- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=human,URL](/de/docs/Web/HTML/Element/a#:~:text=human,url) scrollt und hebt den ersten Textabschnitt hervor, der mit `human` beginnt und mit `URL` endet.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,defining%20a%20value](/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,defining%20a%20value) scrollt und hebt den ersten Textabschnitt hervor, der mit `linked URL` beginnt und mit `defining a value` endet. Beachten Sie, dass der hervorgehobene Text sich über mehrere Block-Level-Elemente erstreckt.

### Beispiele mit prefix- und/oder -suffix

- [https://example.com#:~:text=asking-,for](https://example.com#:~:text=asking-,for) scrollt zum zweiten Vorkommen des Texts `for` im Dokument und hebt ihn hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=sent-,referrer](/de/docs/Web/HTML/Element/a#:~:text=sent-,referrer) scrollt zum ersten Vorkommen des Texts `referrer`, dem direkt der Text `sent` vorangestellt ist. Dies ist das fünfte Vorkommen von `referrer` im Dokument; ohne das Präfix wäre das erste Vorkommen hervorgehoben worden.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format](/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format) scrollt zum ersten Vorkommen des Texts `linked URL`, dem direkt der Text `'s format` folgt. Dies ist das fünfte Vorkommen von `linked URL` im Dokument; ohne das Suffix wäre das erste Vorkommen hervorgehoben worden.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=downgrade:-,The%20Referer,be%20sent,-to%20origins](/de/docs/Web/HTML/Element/a#:~:text=downgrade:-,The%20Referer,be%20sent,-to%20origins) scrollt und hebt den Textabschnitt `The Referer ... be sent` hervor, der mit `downgrade:` beginnt und mit `to origins` endet. Dies ist ein komplexeres Beispiel, das zeigt, wie Präfixe/Suffixe verwendet werden können, um das spezifische Textvorkommen zu verlinken. Entfernen Sie beispielsweise das Präfix, und sehen Sie, was dann ausgewählt wird.

### URLs mit mehreren Textfragmenten

Sie können mehrere Textfragmente in derselben URL angeben, wobei diese durch das Zeichen `&` getrennt werden. Hier sind ein paar Beispiele:

- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=Causes&text=linked](/de/docs/Web/HTML/Element/a#:~:text=causes&text=linked) scrollt und hebt die ersten Vorkommen der Textfragmente `Causes` und `linked` hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format&text=Deprecated-,attributes,attribute](/de/docs/Web/HTML/Element/a#:~:text=linked%20URL,-'s%20format&text=Deprecated-,attributes,attribute) scrollt und hebt zwei Textabschnitte hervor:
  - Das erste Vorkommen des Textes `linked URL`, dem direkt der Text `'s format` folgt.
  - Das erste Textfragment, das mit `attributes` beginnt und mit `attribute` endet, und dem `Deprecated` vorangestellt ist.

Wenn eines oder mehrere Ihrer Textfragmente nicht hervorgehoben werden und Sie sicher sind, dass die Syntax korrekt ist, könnten Sie ein anderes Vorkommen als erwartet hervorgehoben haben. Es könnte hervorgehoben sein, aber außerhalb des sichtbaren Bereichs liegen.

### Styling von hervorgehobenem Text

Browser sind frei in der Wahl der Standardgestaltung für hervorgehobenen Text. Das [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo/#selectordef-target-text) definiert ein Pseudo-Element, {{cssxref("::target-text")}}, das es ermöglicht, eine individuelle Gestaltung anzugeben.

Zum Beispiel haben wir in unserem [scroll-to-text-Demo](https://mdn.github.io/css-examples/target-text/index.html#:~:text=From%20the%20foregoing%20remarks%20we%20may%20gather%20an%20idea%20of%20the%20importance) folgendes CSS genutzt:

```css
::target-text {
  background-color: rebeccapurple;
  color: white;
}
```

Folgen Sie dem Link oben in einem unterstützenden Browser, um die Umsetzung zu sehen.

### Funktionsdetectierung

Das [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)-Objekt, das über die Eigenschaft [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective) zugänglich ist, kann genutzt werden, um zu testen, ob Textfragmente in einem Browser unterstützt werden.

Führen Sie Folgendes in den DevTools eines unterstützenden Browsers aus, in einem Tab mit einem oder mehreren Übereinstimmungen für Textfragmente:

```js
document.fragmentDirective;
// returns an empty FragmentDirective object, if supported
// undefined otherwise
```

Diese Funktionalität ist derzeit hauptsächlich zur Funktionsdetektion gedacht. In Zukunft könnte das `FragmentDirective`-Objekt zusätzliche Informationen enthalten.

## Referenz

### API

- [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)
  - : Ein Objekt, das die Textfragmente repräsentiert. Derzeit leer und hauptsächlich für Funktionsdetektion vorgesehen.
- [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective)
  - : Gibt das [`FragmentDirective`](/de/docs/Web/API/FragmentDirective) für das aktuelle Dokument zurück.

### CSS

- {{cssxref("::target-text")}}
  - : Repräsentiert die hervorgehobenen Textfragmente im aktuellen Dokument. Ermöglicht es Autoren, die Gestaltung der Textfragmente anzupassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Mutig verlinken, wo zuvor niemand verlinkt hat: Textfragmente](https://web.dev/articles/text-fragments)
