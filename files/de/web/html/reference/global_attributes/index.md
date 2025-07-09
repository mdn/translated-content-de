---
title: Globale Attribute
slug: Web/HTML/Reference/Global_attributes
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

**Globale Attribute** sind Attribute, die allen HTML-Elementen gemeinsam sind; sie können auf allen Elementen verwendet werden, obwohl sie bei manchen Elementen möglicherweise keine Wirkung haben.

Globale Attribute können bei allen [HTML-Elementen](/de/docs/Web/HTML/Reference/Elements) angegeben werden, _auch bei denen, die nicht im Standard spezifiziert sind_. Das bedeutet, dass alle nicht standardmäßigen Elemente diese Attribute trotzdem zulassen müssen, auch wenn die Verwendung dieser Elemente bedeutet, dass das Dokument nicht mehr HTML5-konform ist. Zum Beispiel verstecken HTML5-konforme Browser Inhalte, die als `<foo hidden>…</foo>` markiert sind, obwohl `<foo>` kein gültiges HTML-Element ist.

Neben den grundlegenden globalen HTML-Attributen existieren auch folgende globale Attribute:

- `xml:lang` und `xml:base` — diese sind aus den XHTML-Spezifikationen übernommen und veraltet, aber aus Kompatibilitätsgründen beibehalten.
- Das ARIA-Attribut [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) und die mehrfachen [`aria-*`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes) Zustände und Eigenschaften, die zur Sicherstellung der Barrierefreiheit verwendet werden.
- Die [Event-Handler-](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) Attribute: `onabort`, `onautocomplete`, `onautocompleteerror`, `onblur`, `oncancel`, `oncanplay`, `oncanplaythrough`, `onchange`, `onclick`, `onclose`, `oncontextmenu`, `oncuechange`, `ondblclick`, `ondrag`, `ondragend`, `ondragenter`, `ondragleave`, `ondragover`, `ondragstart`, `ondrop`, `ondurationchange`, `onemptied`, `onended`, `onerror`, `onfocus`, `oninput`, `oninvalid`, `onkeydown`, `onkeypress`, `onkeyup`, `onload`, `onloadeddata`, `onloadedmetadata`, `onloadstart`, `onmousedown`, `onmouseenter`, `onmouseleave`, `onmousemove`, `onmouseout`, `onmouseover`, `onmouseup`, `onmousewheel`, `onpause`, `onplay`, `onplaying`, `onprogress`, `onratechange`, `onreset`, `onresize`, `onscroll`, `onseeked`, `onseeking`, `onselect`, `onshow`, `onsort`, `onstalled`, `onsubmit`, `onsuspend`, `ontimeupdate`, `ontoggle`, `onvolumechange`, `onwaiting`.

## Liste der globalen Attribute

- [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey)
  - : Bietet einen Hinweis zum Erstellen eines Tastaturkürzels für das aktuelle Element. Dieses Attribut besteht aus einer durch Leerzeichen getrennten Liste von Zeichen. Der Browser sollte das erste verwenden, das auf dem Tastaturlayout des Computers existiert.
- [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) {{non-standard_inline}}
  - : Verknüpft ein positioniertes Element mit einem Anker-Element. Der Wert des Attributs ist der [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Wert des Elements, an das Sie das positionierte Element verankern möchten. Anschließend kann das Element [mittels CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) positioniert werden.
- [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize)
  - : Legt fest, ob eingegebener Text automatisch großgeschrieben wird und, wenn ja, auf welche Weise.
- [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect)
  - : Kontrolliert, ob eingegebener Text automatisch auf Rechtschreibfehler korrigiert wird. Dies kann auf Elemente angewendet werden, die bearbeitbaren Text enthalten, mit Ausnahme von {{HTMLElement("input")}}-Elementen mit dem Attribut: [`type="password"`](/de/docs/Web/HTML/Reference/Elements/input/password), [`type="email"`](/de/docs/Web/HTML/Reference/Elements/input/email) oder [`type="url"`](/de/docs/Web/HTML/Reference/Elements/input/url).
- [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)
  - : Gibt an, dass ein Element beim Laden der Seite oder sobald der {{HTMLElement("dialog")}}, zu dem es gehört, angezeigt wird, fokussiert werden soll. Dieses Attribut ist ein boolescher Wert, der anfänglich auf false gesetzt ist.
- [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)
  - : Eine durch Leerzeichen getrennte Liste der Klassen des Elements. Klassen ermöglichen CSS und JavaScript, bestimmte Elemente über die [Klassenselektoren](/de/docs/Web/CSS/Class_selectors) oder Funktionen wie die Methode [`Document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) auszuwählen und zuzugreifen.
- [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)
  - : Ein {{Glossary("Enumerated", "enumeriertes")}} Attribut, das angibt, ob das Element vom Benutzer bearbeitbar sein soll. In diesem Fall ändert der Browser sein Widget, um das Bearbeiten zu ermöglichen. Das Attribut muss einen der folgenden Werte annehmen:
    - `true` oder der _leere String_, was angibt, dass das Element bearbeitbar sein muss;
    - `false`, was angibt, dass das Element nicht bearbeitbar sein muss;
    - `plaintext-only`, was angibt, dass der rohe Text des Elements bearbeitbar ist, aber Formatierungen des Rich Text deaktiviert sind.

- [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*)
  - : Bildet eine Klasse von Attributen, die als benutzerdefinierte Datenattribute bezeichnet werden und den Austausch von proprietären Informationen zwischen dem [HTML](/de/docs/Web/HTML) und seiner {{Glossary("DOM", "DOM")}}-Darstellung ermöglichen, die von Skripten verwendet werden können. Alle solchen benutzerdefinierten Daten sind über das [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interface des Elements, auf dem das Attribut gesetzt ist, verfügbar. Die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft bietet Zugriff auf sie.
- [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)
  - : Ein enumeriertes Attribut, das die Richtung des Textes des Elements angibt. Es kann die folgenden Werte haben:
    - `ltr`, was _von links nach rechts_ bedeutet und für Sprachen verwendet wird, die von links nach rechts geschrieben werden (wie Englisch);
    - `rtl`, was _von rechts nach links_ bedeutet und für Sprachen verwendet wird, die von rechts nach links geschrieben werden (wie Arabisch);
    - `auto`, was den Benutzeragenten entscheiden lässt. Er verwendet einen grundlegenden Algorithmus, indem er die Zeichen innerhalb des Elements parst, bis er ein Zeichen mit einer starken Richtung findet, und wendet dann diese Richtung auf das gesamte Element an.

- [`draggable`](/de/docs/Web/HTML/Reference/Global_attributes/draggable)
  - : Ein enumeriertes Attribut, das angibt, ob das Element mithilfe der [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) gezogen werden kann. Es kann die folgenden Werte haben:
    - `true`, was angibt, dass das Element gezogen werden darf;
    - `false`, was angibt, dass das Element nicht gezogen werden darf.

- [`enterkeyhint`](/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint)
  - : Gibt einen Hinweis darauf, welches Aktionslabel (oder Icon) für die Eingabetaste auf virtuellen Tastaturen dargestellt werden soll.
- [`exportparts`](/de/docs/Web/HTML/Reference/Global_attributes/exportparts)
  - : Wird verwendet, um Schatten-Teile transitive zu exportieren von einem verschachtelten Schattenbaum in einen enthaltenden Lichtbaum.
- [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)
  - : Ein enumeriertes Attribut, das angibt, dass das Element noch nicht oder nicht mehr _relevant_ ist. Beispielsweise kann es verwendet werden, um Elemente der Seite zu verbergen, die erst nach Abschluss des Anmeldevorgangs verwendet werden können. Der Browser wird solche Elemente nicht rendern. Dieses Attribut darf nicht verwendet werden, um Inhalte zu verbergen, die legitim angezeigt werden könnten.
- [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)
  - : Definiert eine eindeutige Kennung (ID), die im gesamten Dokument eindeutig sein muss. Sein Zweck ist es, das Element beim Verknüpfen (Verwenden eines Fragment-Identifiers), Scripting oder Styling (mit CSS) zu identifizieren.
- [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)
  - : Ein boolescher Wert, der den Browser dazu bringt, Benutzereingabeereignisse für das Element zu ignorieren. Nützlich, wenn Klickereignisse vorhanden sind.
- [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode)
  - : Gibt einen Hinweis an Browser, welche virtuelle Tastaturkonfiguration verwendet werden soll, wenn dieses Element oder dessen Inhalte bearbeitet werden. Wird hauptsächlich bei {{HTMLElement("input")}}-Elementen verwendet, kann aber auf jedes Element angewendet werden, solange es im Modus [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) ist.
- [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is)
  - : Ermöglicht es Ihnen anzugeben, dass ein Standard-HTML-Element sich wie ein registriertes benutzerdefiniertes eingebautes Element verhalten soll (siehe [Verwendung benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) für weitere Details).

> [!NOTE]
> Die `item*` Attribute sind Teil des [WHATWG HTML Microdata Merkmals](https://html.spec.whatwg.org/multipage/microdata.html#microdata).

- [`itemid`](/de/docs/Web/HTML/Reference/Global_attributes/itemid)
  - : Der eindeutige, globale Bezeichner eines Elements.
- [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)
  - : Wird verwendet, um Eigenschaften zu einem Element hinzuzufügen. Jedes HTML-Element kann einen `itemprop`-Attributwert haben, bei dem ein `itemprop` aus einem Namen-Wert-Paar besteht.
- [`itemref`](/de/docs/Web/HTML/Reference/Global_attributes/itemref)
  - : Eigenschaften, die keine Nachkommen eines Elements mit dem `itemscope`-Attribut sind, können dem Element mittels eines `itemref` zugeordnet werden. Es bietet eine Liste von Element-Ids (nicht `itemid`s) mit zusätzlichen Eigenschaften anderswo im Dokument.
- [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope)
  - : `itemscope` funktioniert (in der Regel) zusammen mit [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype), um anzugeben, dass der HTML-Inhalt innerhalb eines Blocks sich auf ein bestimmtes Element bezieht. `itemscope` erstellt das Item und definiert den Geltungsbereich des damit verbundenen `itemtype`. `itemtype` ist eine gültige URL eines Vokabulars (wie [schema.org](https://schema.org/)), das das Element und dessen Eigenschaftskontext beschreibt.
- [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype)
  - : Gibt die URL des Vokabulars an, das verwendet wird, um `itemprop`s (Elementeigenschaften) in der Datenstruktur zu definieren. [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope) wird verwendet, um den Geltungsbereich festzulegen, in dem die durch `itemtype` bestimmte Vokabular festgelegt wird, aktiv sein wird.
- [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)
  - : Hilft, die Sprache eines Elements zu definieren: die Sprache, in der nicht bearbeitbare Elemente stehen, oder die Sprache, in der bearbeitbare Elemente vom Benutzer geschrieben werden sollen. Das Attribut enthält ein "Sprachtag" (bestehend aus einem durch Bindestriche getrennten "Sprach-Subtag") im Format, das in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} definiert ist. `xml:lang` hat Vorrang darüber.
- [`nonce`](/de/docs/Web/HTML/Reference/Global_attributes/nonce)
  - : Ein kryptografischer Nonce ("Nummer, die nur einmal verwendet wird"), der von der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verwendet werden kann, um zu bestimmen, ob ein bestimmter Aufruf zugelassen wird.
- [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)
  - : Eine durch Leerzeichen getrennte Liste der Teilenamen des Elements. Teilenamen erlauben CSS, spezifische Elemente in einem Schattenbaum über das {{CSSxRef("::part")}}-Pseudoelement zu selektieren und zu stylen.
- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)
  - : Wird verwendet, um ein Element als Popover-Element zu bezeichnen (siehe [Popover API](/de/docs/Web/API/Popover_API)). Popover-Elemente sind mittels `display: none` verborgen, bis sie über ein aufrufendes/steuerndes Element (z. B. ein `<button>` oder `<input type="button">` mit einem [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut) oder einem Aufruf von [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) geöffnet werden.
- [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Rollen definieren die semantische Bedeutung von Inhalten und erlauben Bildschirmlesegeräten und anderen Tools, eine Interaktion mit einem Objekt auf eine Weise zu präsentieren und zu unterstützen, die mit den Benutzererwartungen für diesen Objekttyp konsistent ist. `roles` werden zu HTML-Elementen hinzugefügt mittels `role="role_type"`, wobei `role_type` der Name einer Rolle in der ARIA-Spezifikation ist.
- [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot)
  - : Weise einem Slot in einem [Schatten-DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) Schattenbaum ein Element zu: Ein Element mit einem `slot`-Attribut wird dem Slot zugeordnet, der durch das {{HTMLElement("slot")}}-Element erstellt wurde, dessen [`name`](/de/docs/Web/HTML/Reference/Elements/slot#name)-Attributwert mit diesem `slot`-Attributwert übereinstimmt.
- [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)
  - : Ein enumeriertes Attribut, das festlegt, ob das Element auf Rechtschreibfehler überprüft werden kann. Es kann die folgenden Werte haben:
    - leerer String oder `true`, was angibt, dass das Element, wenn möglich, auf Rechtschreibfehler geprüft werden sollte;
    - `false`, was angibt, dass das Element nicht auf Rechtschreibfehler geprüft werden sollte.

- [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)
  - : Enthält [CSS](/de/docs/Web/CSS)-Style-Deklarationen, die auf das Element angewendet werden sollen. Beachten Sie, dass es empfohlen wird, Styles in einer separaten Datei oder Dateien zu definieren. Dieses Attribut und das {{HTMLElement("style")}}-Element haben hauptsächlich den Zweck, schnelles Styling zu ermöglichen, beispielsweise für Testzwecke.
- [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)
  - : Ein ganzzahliger Wert, der angibt, ob das Element Eingabefokus erhalten kann (ist _fokussierbar_), ob es an der sequentiellen Tastaturnavigation teilnehmen soll und wenn ja, in welcher Reihenfolge. Es kann verschiedene Werte annehmen:
    - ein _negativer Wert_ bedeutet, dass das Element fokussierbar sein soll, jedoch nicht über sequentielle Tastaturnavigation erreichbar ist;
    - `0` bedeutet, dass das Element fokussierbar und über sequentielle Tastaturnavigation erreichbar sein soll, jedoch die relative Reihenfolge durch die Plattformkonvention definiert ist;
    - ein _positiver Wert_ bedeutet, dass das Element fokussierbar und über sequentielle Tastaturnavigation erreichbar sein soll; die Reihenfolge, in der die Elemente fokussiert werden, folgt dem aufsteigenden Wert des [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex). Wenn mehrere Elemente denselben tabindex teilen, folgt ihre relative Reihenfolge ihren relativen Positionen im Dokument.

- [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)
  - : Enthält einen Text, der Beratungsinformationen zu dem Element, zu dem es gehört, darstellt. Solche Informationen können typischerweise, aber nicht notwendigerweise, dem Benutzer als Tooltip präsentiert werden.
- [`translate`](/de/docs/Web/HTML/Reference/Global_attributes/translate)
  - : Ein enumeriertes Attribut, das verwendet wird, um anzugeben, ob die Attributwerte eines Elements und die Werte seiner [`Text`](/de/docs/Web/API/Text)-Knotenkinder beim Lokalisieren der Seite übersetzt oder unverändert bleiben sollen. Es kann folgende Werte haben:
    - leerer String oder `yes`, was angibt, dass das Element übersetzt wird.
    - `no`, was angibt, dass das Element nicht übersetzt wird.

- [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Reference/Global_attributes/virtualkeyboardpolicy) {{Experimental_Inline}}
  - : Ein {{Glossary("enumerated", "enumeriertes")}} Attribut, das verwendet wird, um das Verhalten der virtuellen Bildschirmtastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten, bei denen eine Hardware-Tastatur möglicherweise nicht verfügbar ist, zu steuern, für Elemente, deren Inhalt bearbeitbar ist (zum Beispiel ist es ein {{htmlelement("input")}} oder {{htmlelement("textarea")}} Element oder ein Element mit dem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut).
    - `auto` oder ein _leerer String_, was bedeutet, dass die virtuelle Tastatur automatisch angezeigt wird, wenn das Element fokussiert oder angeklickt wird.
    - `manual`, was den Fokus und Klick auf das Element vom Zustand der virtuellen Tastatur entkoppelt.

- [`writingsuggestions`](/de/docs/Web/HTML/Reference/Global_attributes/writingsuggestions)
  - : Ein {{Glossary("enumerated", "enumeriertes")}} Attribut, das angibt, ob schreibergestützte Vorschläge von der unter dem Geltungsbereich des Elements aktivierten Webseite bereitgestellt werden sollen oder nicht.
    - `false`, was die schreibergestützten Vorschläge des Browsers deaktiviert.
    - `true` oder ein _leerer String_, was schreibergestützte Vorschläge aktiviert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Interface [`Element`](/de/docs/Web/API/Element), das das Abfragen der meisten globalen Attribute ermöglicht.
