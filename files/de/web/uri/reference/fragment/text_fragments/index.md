---
title: Textfragmente
slug: Web/URI/Reference/Fragment/Text_fragments
l10n:
  sourceCommit: 60bca6f19eb6c9fbb5c36d4fda4ca27a59a9655e
---

**Textfragmente** verlinken direkt zu bestimmtem Text auf einer Webseite, ohne dass der Seitenautor eine ID hinzufügen muss. Dafür wird eine spezielle Syntax im URL-Fragment verwendet. Dieses Feature ermöglicht es, Deep Links zu Inhalten zu erstellen, die Sie nicht kontrollieren und die möglicherweise keine IDs haben. Außerdem wird das Teilen von Links nützlicher, indem andere direkt auf bestimmte Wörter hingewiesen werden. Browser können sich darin unterscheiden, wie sie auf den verlinkten Text aufmerksam machen – normalerweise wird der Text in den sichtbaren Bereich gescrollt und farblich hervorgehoben.

## Konzepte und Nutzung

Historisch gesehen war eine der Schlüsselmerkmale des Webs schon immer die Fähigkeit, Links zwischen verschiedenen Dokumenten bereitzustellen – es ist das, was das _Web_ zu einem Netz macht:

- Sie können einen Link an den Anfang eines Dokuments setzen, indem Sie auf seine URL verlinken, zum Beispiel:
  - [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a](/de/docs/Web/HTML/Reference/Elements/a).
- Sie können auf einen bestimmten Abschnitt eines Dokuments verlinken, indem Sie auf seine URL plus das _Dokumentfragment_ (ID) dieses Abschnitts verlinken, zum Beispiel:
  - [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#browser_compatibility](/de/docs/Web/HTML/Reference/Elements/a#browser_compatibility).

Das Problem beim Verlinken auf spezifische Dokumentfragmente ist, dass der Autor der verlinkten Seite einen Anker setzen muss, um _tatsächlich_ darauf verlinken zu können. Das obige zweite Beispiel verlinkt auf ein {{htmlelement("Heading_Elements", "h2")}}-Element mit der ID `browser_compatibility`:

```html
<h2 id="browser_compatibility">
  <a href="#browser_compatibility">Browser compatibility</a>
</h2>
```

Nicht alle Dokumente haben solche Anker, und selbst wenn sie vorhanden sind, ist das Verlinken auf eine Überschrift möglicherweise viel weniger offensichtlich als das direkte Verlinken auf den spezifischen Text, den Sie zitieren. Hier helfen Textfragmente: Sie ermöglichen dem Linkautor die volle Kontrolle darüber, auf welchen Text verlinkt wird, ohne dass eine spezielle Markup in dem Ziel-Dokument erforderlich ist. Zum Beispiel kann eine Suchmaschine in ihren Suchergebnissen auf einen bestimmten Satz verweisen, und ein Klick auf den Link führt Sie direkt zu diesem Satz.

Textfragmente haben jedoch auch eine Einschränkung: Text in einem Dokument ist weniger stabil als die Dokumentstruktur. Wenn der Text im verlinkten Dokument aktualisiert wird, stimmt das Fragment nicht mehr überein, und der Browser navigiert an den Anfang der Seite. Dies ist in Ordnung für flüchtige Links wie die in Suchergebnissen, aber wenn Sie möchten, dass der Link über längere Zeit funktioniert, sind Dokumentfragmente möglicherweise zuverlässiger.

## Syntax

```url
https://example.com#:~:text=[prefix-,]textStart[,textEnd][,-suffix]
```

Textfragmente sind eine Art URL-Fragment und werden nach dem `#` geschrieben. Die Schlüsselteile sind wie folgt zu verstehen:

- `:~:`
  - : Auch bekannt als _Fragment-Direktive_, teilt diese Zeichenfolge dem Browser mit, dass das Folgende eine oder mehrere Benutzeragenten-Anweisungen sind, die während des Ladevorgangs aus der URL entfernt werden, damit Autorenskripte nicht direkt mit ihnen interagieren können. Benutzeragenten-Anweisungen werden auch Direktiven genannt.
- `text=`
  - : Eine Textdirektive. Diese gibt dem Browser ein Textfragment vor, das den Text definiert, auf den im verlinkten Dokument verlinkt werden soll.
- `textStart`
  - : Eine Textzeichenfolge, die den Anfang des verlinkten Textes angibt.
- `textEnd` {{optional_inline}}
  - : Eine Textzeichenfolge, die das Ende des verlinkten Textes angibt.
- `prefix-` {{optional_inline}}
  - : Eine Textzeichenfolge gefolgt von einem Bindestrich, die angibt, welcher Text unmittelbar vor dem verlinkten Text stehen soll, wobei nur Leerzeichen dazwischen erlaubt sind. Dies hilft dem Browser, den richtigen verlinkten Text auszuwählen, falls es mehrere Übereinstimmungen gibt.
- `-suffix` {{optional_inline}}
  - : Ein Bindestrich gefolgt von einer Textzeichenfolge, die angibt, welcher Text unmittelbar nach dem verlinkten Text stehen soll, wobei nur Leerzeichen dazwischen erlaubt sind. Dies hilft dem Browser, den richtigen verlinkten Text auszuwählen, falls es mehrere Übereinstimmungen gibt.

Unterstützende Browser werden zum ersten Textfragment im verlinkten Dokument scrollen und es hervorheben, das mit der angegebenen Direktive übereinstimmt. Beachten Sie, dass es möglich ist, mehrere Textfragmente anzugeben, die im selben URL hervorgehoben werden sollen, indem sie durch das "&"-Zeichen getrennt werden.

### Nutzungsnotizen

- Textzeichenfolgen, die für die Werte `textStart`, `textEnd`, `prefix-` und `-suffix` verwendet werden, müssen [prozentkodiert](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) sein. Darüber hinaus erfordert [der Standard](https://wicg.github.io/scroll-to-text-fragment/#syntax) dass das URL-sichere Bindestrich-Zeichen `'-'` ebenfalls prozentkodiert ist.
- Übereinstimmungen sind nicht groß-/kleinschreibungssensitiv.
- Einzelne `textStart`, `textEnd`, `prefix-` und `-suffix` Zeichenfolgen müssen vollständig innerhalb desselben {{Glossary("Block-level_content", "Block-Level-Elementes")}} liegen, aber vollständige Übereinstimmungen können sich über mehrere Element-Grenzen erstrecken.
- Aus Sicherheitsgründen sollten Sie beim Verlinken auf eine Cross-Origin-Seite mit diesem Feature den Link im `noopener`-Kontext öffnen — Sie müssen `rel="noopener"` zu Ihren {{htmlelement("a")}}-Elementen hinzufügen und `noopener` zu Ihren [`window.open()`](/de/docs/Web/API/Window/open) Aufrufen hinzufügen, wenn Sie dieses Feature verwenden.
- Textfragmente werden nur bei vom Benutzer initiierten Navigationen aktiviert.
- Textfragmente werden nur auf den Hauptframe angewendet; Text wird nicht innerhalb von {{htmlelement("iframe")}}s durchsucht, und die Navigation in `iframe` führt nicht zur Aktivierung eines Textfragments.
- Für Websites, die Opt-out wählen möchten, unterstützen Chromium-basierte Browser einen [Document Policy](https://wicg.github.io/document-policy/) Header-Wert, den sie senden können, damit Benutzeragenten keine Textfragmente verarbeiten:

  ```http
  Document-Policy: force-load-at-top
  ```

> [!NOTE]
> Wenn das bereitgestellte Textfragment mit keinem Text im verlinkten Dokument übereinstimmt oder wenn der Browser keine Textfragmente unterstützt, wird das gesamte Textfragment ignoriert und der Anfang des Dokuments verlinkt.

## Beispiele

### Textfragment mit textStart

- [https://example.com/#:~:text=for](https://example.com/#:~:text=for) scrollt zu und hebt die erste Instanz des Textes `for` im Dokument hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=human](/de/docs/Web/HTML/Reference/Elements/a#:~:text=human) scrollt zu und hebt die erste Instanz des Textes `human` im Dokument hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL](/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL) scrollt zu und hebt die erste Instanz des Textes `linked URL` im Dokument hervor.

### textStart und textEnd

- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=human,URL](/de/docs/Web/HTML/Reference/Elements/a#:~:text=human,url) scrollt zu und hebt die erste Instanz einer Textzeichenfolge hervor, die mit `human` beginnt und mit `URL` endet.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,defining%20a%20value](/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,defining%20a%20value) scrollt zu und hebt die erste Instanz einer Textzeichenfolge hervor, die mit `linked URL` beginnt und mit `defining a value` endet. Beachten Sie, wie der hervorgehobene Text sich über mehrere Block-Level-Elemente erstreckt.

### Beispiele mit prefix- und/oder -suffix

- [https://example.com/#:~:text=asking-,for](https://example.com/#:~:text=asking-,for) scrollt zu und hebt die zweite Instanz des Textes `for` im Dokument hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=sent-,referrer](/de/docs/Web/HTML/Reference/Elements/a#:~:text=sent-,referrer) scrollt zu und hebt die erste Instanz des Textes `referrer` hervor, der den Text `sent` direkt davor hat. Dies ist die 5. Instanz von `referrer` im Dokument; ohne das Präfix würde die erste Instanz hervorgehoben.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,-'s%20format](/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,-'s%20format) scrollt zu und hebt die erste Instanz des Textes `linked URL` hervor, der den Text `'s format` direkt dahinter hat. Dies ist die 5. Instanz von `linked URL` im Dokument; ohne das Suffix würde die erste Instanz hervorgehoben.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=downgrade:-,The%20Referer,be%20sent,-to%20origins](/de/docs/Web/HTML/Reference/Elements/a#:~:text=downgrade:-,The%20Referer,be%20sent,-to%20origins) scrollt zu und hebt die Instanz des Textes `The Referer ... be sent` hervor, die durch `downgrade:` vorangestellt und durch `to origins` nachgestellt ist. Dies veranschaulicht ein komplexeres Beispiel, wo das Präfix/Suffix verwendet wird, um die spezifische Textinstanz auszuwählen, die Sie verlinken möchten. Versuchen Sie beispielsweise, das Präfix zu entfernen, und sehen Sie, was übereinstimmt.

### URLs mit mehreren Textfragmenten

Es ist möglich, mehrere Textfragmente in derselben URL anzugeben, indem sie mit dem Zeichen `&` getrennt werden. Sehen wir uns ein paar Beispiele an:

- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=Causes&text=linked](/de/docs/Web/HTML/Reference/Elements/a#:~:text=causes&text=linked) scrollt zu und hebt die ersten Instanzen der Textzeichenfolgen `Causes` und `linked` hervor.
- [https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,-'s%20format&text=Deprecated-,attributes,attribute](/de/docs/Web/HTML/Reference/Elements/a#:~:text=linked%20URL,-'s%20format&text=Deprecated-,attributes,attribute) scrollt zu und hebt zwei Textinstanzen hervor:
  - Die erste Instanz des Textes `linked URL`, das den Text `'s format` direkt dahinter hat.
  - Die erste Instanz einer Textzeichenfolge, die mit `attributes` beginnt und mit `attribute` endet, das durch `Deprecated` vorangestellt ist.

Wenn eines oder mehrere Ihrer Textfragmente nicht hervorgehoben werden und Sie sicher sind, dass die Syntax korrekt ist, könnte es sein, dass Sie einfach eine andere Instanz als die erwartete hervorheben. Es könnte hervorgehoben sein, aber außerhalb des Bildschirms liegen.

### Stil von hervorgehobenen Textfragmenten

Browser sind frei, den hervorgehobenen Text auf beliebige Standardweise zu stylen. Das [CSS Pseudo-Elements Module Level 4](https://drafts.csswg.org/css-pseudo/#selectordef-target-text) definiert ein Pseudo-Element, {{cssxref("::target-text")}}, das es ermöglicht, benutzerdefinierte Stile festzulegen.

Im Beispiel unseres [scroll-to-text-Demos](https://mdn.github.io/css-examples/target-text/index.html#:~:text=From%20the%20foregoing%20remarks%20we%20may%20gather%20an%20idea%20of%20the%20importance) verwenden wir das folgende CSS:

```css
::target-text {
  background-color: rebeccapurple;
  color: white;
}
```

Versuchen Sie, den obigen Link in einem unterstützenden Browser zu folgen, um den Effekt zu sehen, den dies hat.

### Feature-Detectability

Das [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)-Objekt, das über die [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective)-Eigenschaft zugänglich ist, kann verwendet werden, um zu testen, ob Textfragmente in einem Browser unterstützt werden.

Versuchen Sie, das Folgende in den Entwicklertools eines unterstützenden Browsers zu starten, in einem Tab mit einem oder mehreren hervorgehobenen Textfragmenten:

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
  - : Repräsentiert die hervorgehobenen Textfragmente im aktuellen Dokument. Es ermöglicht es Autoren, das Styling der Textfragmente anzupassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Kühn verlinken, wo noch niemand verlinkt hat: Textfragmente](https://web.dev/articles/text-fragments)
