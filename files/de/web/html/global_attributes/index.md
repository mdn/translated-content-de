---
title: Globale Attribute
slug: Web/HTML/Global_attributes
l10n:
  sourceCommit: 87b1277782f71a58693aeb6a83464e3ccabbfa20
---

{{HTMLSidebar("Global_attributes")}}

**Globale Attribute** sind Attribute, die für alle HTML-Elemente gelten; sie können für alle Elemente verwendet werden, obwohl sie bei einigen Elementen keine Wirkung haben.

Globale Attribute können auf allen [HTML-Elementen](/de/docs/Web/HTML/Element) angegeben werden, _selbst auf solchen, die nicht im Standard spezifiziert sind_. Das bedeutet, dass auch nicht standardisierte Elemente diese Attribute zulassen müssen, obwohl die Verwendung dieser Elemente bedeutet, dass das Dokument nicht mehr HTML5-konform ist. Zum Beispiel verstecken HTML5-konforme Browser Inhalte, die als `<foo hidden>…</foo>` markiert sind, obwohl `<foo>` kein gültiges HTML-Element ist.

Zusätzlich zu den grundlegenden globalen HTML-Attributen gibt es die folgenden globalen Attribute:

- `xml:lang` und `xml:base` — diese stammen aus den XHTML-Spezifikationen, sind veraltet, aber aus Kompatibilitätsgründen beibehalten.
- Das ARIA-Attribut [`role`](/de/docs/Web/Accessibility/ARIA/Roles) und die mehrfachen [`aria-*`](/de/docs/Web/Accessibility/ARIA/Attributes) Zustände und Eigenschaften, die zur Sicherstellung der Barrierefreiheit verwendet werden.
- Die [Event-Handler](/de/docs/Web/HTML/Attributes#event_handler_attributes) Attribute: `onabort`, `onautocomplete`, `onautocompleteerror`, `onblur`, `oncancel`, `oncanplay`, `oncanplaythrough`, `onchange`, `onclick`, `onclose`, `oncontextmenu`, `oncuechange`, `ondblclick`, `ondrag`, `ondragend`, `ondragenter`, `ondragleave`, `ondragover`, `ondragstart`, `ondrop`, `ondurationchange`, `onemptied`, `onended`, `onerror`, `onfocus`, `oninput`, `oninvalid`, `onkeydown`, `onkeypress`, `onkeyup`, `onload`, `onloadeddata`, `onloadedmetadata`, `onloadstart`, `onmousedown`, `onmouseenter`, `onmouseleave`, `onmousemove`, `onmouseout`, `onmouseover`, `onmouseup`, `onmousewheel`, `onpause`, `onplay`, `onplaying`, `onprogress`, `onratechange`, `onreset`, `onresize`, `onscroll`, `onseeked`, `onseeking`, `onselect`, `onshow`, `onsort`, `onstalled`, `onsubmit`, `onsuspend`, `ontimeupdate`, `ontoggle`, `onvolumechange`, `onwaiting`.

## Liste der globalen Attribute

- [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey)
  - : Bietet einen Hinweis zur Erstellung einer Tastenkombination für das aktuelle Element. Dieses Attribut besteht aus einer durch Leerzeichen getrennten Liste von Zeichen. Der Browser sollte das erste verwenden, das im Tastaturlayout des Computers existiert.
- [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) {{non-standard_inline}}
  - : Verknüpft ein positioniertes Element mit einem Anker-Element. Der Wert des Attributs ist der [`id`](/de/docs/Web/HTML/Global_attributes/id)-Wert des Elements, an dem das positionierte Element verankert werden soll. Das Element kann dann durch [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) positioniert werden.
- [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize)
  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und wenn ja, wie.
- [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)
  - : Gibt an, dass ein Element beim Laden der Seite oder sobald das zugehörige {{HTMLElement("dialog")}} angezeigt wird, fokussiert werden soll. Dieses Attribut ist ein boolescher Wert, der zunächst false ist.
- [`class`](/de/docs/Web/HTML/Global_attributes/class)
  - : Eine durch Leerzeichen getrennte Liste der Klassen des Elements. Klassen ermöglichen es CSS und JavaScript, bestimmte Elemente über die [Klassenselektoren](/de/docs/Web/CSS/Class_selectors) oder Funktionen wie die Methode [`Document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) auszuwählen und darauf zuzugreifen.
- [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)

  - : Ein {{Glossary("Enumerated", "Enumerations-")}} Attribut, das angibt, ob das Element vom Benutzer bearbeitbar sein soll. Falls ja, passt der Browser sein Widget an, um die Bearbeitung zu ermöglichen. Das Attribut muss einen der folgenden Werte annehmen:

    - `true` oder den leeren String, was bedeutet, dass das Element bearbeitbar sein muss;
    - `false`, was bedeutet, dass das Element nicht bearbeitbar sein darf;
    - `plaintext-only`, was bedeutet, dass der rohe Text des Elements bearbeitbar ist, aber Rich-Text-Formatierungen deaktiviert sind.

- [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*)
  - : Bildet eine Klasse von Attributen, genannt benutzerdefinierte Datenattribute, die es ermöglichen, proprietäre Informationen zwischen dem [HTML](/de/docs/Web/HTML) und seiner {{Glossary("DOM", "DOM")}}-Darstellung auszutauschen, die von Skripten verwendet werden können. Alle solche benutzerdefinierten Daten sind über die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle des Elements, auf dem das Attribut gesetzt ist, verfügbar. Die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft gibt Zugriff auf sie.
- [`dir`](/de/docs/Web/HTML/Global_attributes/dir)

  - : Ein Enumerations-Attribut, das die Richtung des Textes eines Elements angibt. Es kann die folgenden Werte haben:

    - `ltr`, was _left to right_ bedeutet und für Sprachen, die von links nach rechts geschrieben werden (wie Englisch), verwendet werden soll;
    - `rtl`, was _right to left_ bedeutet und für Sprachen, die von rechts nach links geschrieben werden (wie Arabisch), verwendet werden soll;
    - `auto`, was dem Benutzeragenten die Entscheidung überlässt. Es verwendet einen grundlegenden Algorithmus, während es die Zeichen innerhalb des Elements durchsucht, bis es ein Zeichen mit starker Richtung findet und dann diese Richtung auf das gesamte Element anwendet.

- [`draggable`](/de/docs/Web/HTML/Global_attributes/draggable)

  - : Ein Enumerations-Attribut, das anzeigt, ob das Element mithilfe der [Drag-and-Drop-API](/de/docs/Web/API/HTML_Drag_and_Drop_API) gezogen werden kann. Es kann die folgenden Werte haben:

    - `true`, was anzeigt, dass das Element gezogen werden darf;
    - `false`, was anzeigt, dass das Element nicht gezogen werden darf.

- [`enterkeyhint`](/de/docs/Web/HTML/Global_attributes/enterkeyhint)
  - : Gibt Hinweise, welches Aktionslabel (oder Icon) für die Eingabetaste auf virtuellen Tastaturen präsentiert werden soll.
- [`exportparts`](/de/docs/Web/HTML/Global_attributes/exportparts)
  - : Wird verwendet, um Schattenpartien aus einem verschachtelten Schattenbaum in einen umgebenden Lichtbaum transitiv zu exportieren.
- [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden)
  - : Ein Enumerations-Attribut, das angibt, dass das Element noch nicht oder nicht mehr _relevant_ ist. Beispielsweise kann es verwendet werden, um Elemente der Seite zu verbergen, die erst nach Abschluss des Anmeldevorgangs verwendet werden können. Der Browser rendert solche Elemente nicht. Dieses Attribut darf nicht verwendet werden, um Inhalte zu verbergen, die legitim angezeigt werden könnten.
- [`id`](/de/docs/Web/HTML/Global_attributes/id)
  - : Definiert eine eindeutige Kennung (ID), die im gesamten Dokument einzigartig sein muss. Sie dient dazu, das Element beim Linken (mithilfe eines Fragmentidentifikators), Skripting oder Styling (mit CSS) zu identifizieren.
- [`inert`](/de/docs/Web/HTML/Global_attributes/inert)
  - : Ein booleanischer Wert, der den Browser veranlasst, Benutzereingabeereignisse für das Element zu ignorieren. Nützlich, wenn Klickereignisse vorhanden sind.
- [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode)
  - : Gibt einen Hinweis an Browser, welche Art von virtueller Tastaturkonfiguration verwendet werden soll, wenn dieses Element oder dessen Inhalt bearbeitet wird. Wird hauptsächlich bei {{HTMLElement("input")}}-Elementen verwendet, kann aber auf jedem Element verwendet werden, wenn es sich im [`contenteditable`](#contenteditable)-Modus befindet.
- [`is`](/de/docs/Web/HTML/Global_attributes/is)
  - : Erlaubt Ihnen anzugeben, dass ein Standard-HTML-Element wie ein registriertes benutzerdefiniertes eingebautes Element funktionieren soll (siehe [Verwendung von benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements) für mehr Details).

> [!NOTE]
> Die `item*` Attribute sind Teil der [WHATWG HTML Microdata-Funktion](https://html.spec.whatwg.org/multipage/microdata.html#microdata).

- [`itemid`](/de/docs/Web/HTML/Global_attributes/itemid)
  - : Der eindeutige, globale Bezeichner eines Elements.
- [`itemprop`](/de/docs/Web/HTML/Global_attributes/itemprop)
  - : Wird verwendet, um einem Element Eigenschaften hinzuzufügen. Jedes HTML-Element kann ein `itemprop`-Attribut angegeben haben, wobei ein `itemprop` aus einem Namens- und Wertpaar besteht.
- [`itemref`](/de/docs/Web/HTML/Global_attributes/itemref)
  - : Eigenschaften, die keine Nachkommen eines Elements mit dem Attribut `itemscope` sind, können dem Element mit einem `itemref` zugeordnet werden. Es bietet eine Liste von Element-IDs (nicht `itemid`s) mit zusätzlichen Eigenschaften an anderer Stelle im Dokument.
- [`itemscope`](/de/docs/Web/HTML/Global_attributes/itemscope)
  - : `itemscope` funktioniert (normalerweise) zusammen mit [`itemtype`](/de/docs/Web/HTML/Global_attributes/itemtype), um anzugeben, dass der HTML-Inhalt in einem Block einem bestimmten Element zugeordnet ist. `itemscope` erstellt das Element und definiert den Geltungsbereich des damit verknüpften `itemtype`. `itemtype` ist eine gültige URL eines Vokabulars (wie [schema.org](https://schema.org/)), das das Element und seine Eigenschaften im Kontext beschreibt.
- [`itemtype`](/de/docs/Web/HTML/Global_attributes/itemtype)
  - : Gibt die URL des Vokabulars an, das verwendet wird, um `itemprop`s (Elementeigenschaften) in der Datenstruktur zu definieren. [`itemscope`](/de/docs/Web/HTML/Global_attributes/itemscope) wird verwendet, um den Geltungsbereich festzulegen, in dem innerhalb der Datenstruktur das durch `itemtype` festgelegte Vokabular aktiv sein wird.
- [`lang`](/de/docs/Web/HTML/Global_attributes/lang)
  - : Hilft, die Sprache eines Elements zu definieren: die Sprache, in der nicht editierbare Elemente sind, oder die Sprache, in der editierbare Elemente vom Benutzer geschrieben werden sollen. Das Attribut enthält ein "Sprach-Tag" (bestehend aus durch Bindestriche getrennten "Sprach-Subtags") im Format, das in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} definiert ist. `xml:lang` hat Vorrang.
- [`nonce`](/de/docs/Web/HTML/Global_attributes/nonce)
  - : Ein kryptografisches Nonce ("number used once"), das von einer [Content Security Policy](/de/docs/Web/HTTP/CSP) verwendet werden kann, um zu bestimmen, ob ein bestimmter Abruf durchgeführt werden darf oder nicht.
- [`part`](/de/docs/Web/HTML/Global_attributes/part)
  - : Eine durch Leerzeichen getrennte Liste der Teilenamen des Elements. Teilnamen ermöglichen es CSS, bestimmte Elemente in einem Schattenbaum über das {{CSSxRef("::part")}}-Pseudoelement auszuwählen und zu stylen.
- [`popover`](/de/docs/Web/HTML/Global_attributes/popover)
  - : Wird verwendet, um ein Element als Popover-Element zu kennzeichnen (siehe [Popover API](/de/docs/Web/API/Popover_API)). Popover-Elemente sind über `display: none` verborgen, bis sie über ein aufrufendes/steuerndes Element (z. B. ein `<button>` oder `<input type="button">` mit einem [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)-Attribut) oder einen Aufruf von [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) geöffnet werden.
- [`role`](/de/docs/Web/Accessibility/ARIA/Roles)
  - : Rollen definieren die semantische Bedeutung von Inhalten, sodass Bildschirmlesegeräte und andere Tools die Interaktion mit einem Objekt konsistent mit den Benutzenerwartungen dieses Objekttyps präsentieren und unterstützen können. `roles` werden HTML-Elementen durch `role="role_type"` hinzugefügt, wobei `role_type` der Name einer Rolle in der ARIA-Spezifikation ist.
- [`slot`](/de/docs/Web/HTML/Global_attributes/slot)
  - : Weist einem Element einen Slot in einem [Shadow-DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) Schattenbaum zu: Ein Element mit einem `slot`-Attribut wird dem Slot zugewiesen, der durch das {{HTMLElement("slot")}}-Element erstellt wird, dessen [`name`](/de/docs/Web/HTML/Element/slot#name)-Attributwert mit dem Wert des `slot`-Attributs übereinstimmt.
- [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck)

  - : Ein Enumerations-Attribut, das definiert, ob das Element auf Rechtschreibfehler überprüft werden kann. Es kann die folgenden Werte haben:

    - leerer String oder `true`, was bedeutet, dass das Element, wenn möglich, auf Rechtschreibfehler überprüft werden sollte;
    - `false`, was bedeutet, dass das Element nicht auf Rechtschreibfehler überprüft werden sollte.

- [`style`](/de/docs/Web/HTML/Global_attributes/style)
  - : Enthält [CSS](/de/docs/Web/CSS)-Styling-Anweisungen, die auf das Element angewendet werden sollen. Beachten Sie, dass es empfohlen wird, Styles in einer separaten Datei oder in separaten Dateien zu definieren. Dieses Attribut und das {{HTMLElement("style")}}-Element haben hauptsächlich den Zweck, das schnelle Styling zu ermöglichen, beispielsweise zu Testzwecken.
- [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)

  - : Ein ganzzahliges Attribut, das anzeigt, ob das Element Eingabefokus erhalten kann (ist _fokussierbar_), ob es an der sequentiellen Tastaturnavigation teilnehmen soll und wenn ja, in welcher Position. Es kann mehrere Werte annehmen:

    - ein _negativer Wert_ bedeutet, dass das Element fokussierbar sein sollte, aber über die sequentielle Tastaturnavigation nicht erreichbar sein sollte;
    - `0` bedeutet, dass das Element fokussierbar und über die sequentielle Tastaturnavigation erreichbar sein sollte, aber seine relative Reihenfolge durch die Plattformkonvention definiert wird;
    - ein _positiver Wert_ bedeutet, dass das Element fokussierbar und über die sequentielle Tastaturnavigation erreichbar sein sollte; die Reihenfolge, in der die Elemente fokussiert werden, ist der aufsteigende Wert des [**tabindex**](#tabindex). Wenn mehrere Elemente denselben tabindex haben, folgt ihre relative Reihenfolge ihren relativen Positionen im Dokument.

- [`title`](/de/docs/Web/HTML/Global_attributes/title)
  - : Enthält einen Text, der beratende Informationen im Zusammenhang mit dem Element darstellt, zu dem es gehört. Solche Informationen können typischerweise, aber nicht notwendigerweise, dem Benutzer als Tooltip präsentiert werden.
- [`translate`](/de/docs/Web/HTML/Global_attributes/translate)

  - : Ein Enumerations-Attribut, das verwendet wird, um anzugeben, ob die Attributwerte eines Elements und die Werte seiner [`Text`](/de/docs/Web/API/Text)-Knotenkinder beim Lokalisieren der Seite übersetzt werden sollen oder ob sie unverändert bleiben. Es kann die folgenden Werte haben:

    - leerer String oder `yes`, was bedeutet, dass das Element übersetzt wird.
    - `no`, was bedeutet, dass das Element nicht übersetzt wird.

- [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy) {{Experimental_Inline}}

  - : Ein {{Glossary("Enumerated", "Enumerations-")}} Attribut, das verwendet wird, um das Verhalten der virtuellen Bildschirmtastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten zu steuern, bei denen möglicherweise keine Hardwaretastatur für Elemente verfügbar ist, deren Inhalt editierbar ist (zum Beispiel ist es ein {{htmlelement("input")}} oder {{htmlelement("textarea")}} Element oder ein Element mit dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut).

    - `auto` oder ein _leerer String_, der die virtuelle Tastatur automatisch anzeigt, wenn das Element fokussiert oder angeklickt wird.
    - `manual`, welches den Fokus und Klick auf das Element von dem Zustand der virtuellen Tastatur entkoppelt.

- [`writingsuggestions`](/de/docs/Web/HTML/Global_attributes/writingsuggestions)

  - : Wird verwendet, um das Verhalten der Schreibvorschläge des Browsers in einem Eingabefeld, einem Abschnitt einer Seite oder der gesamten Seite zu steuern.

    - `false`, welches die Schreibvorschläge des Browsers deaktiviert.
    - `true` oder ein _leerer String_, welches die Schreibvorschläge aktiviert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element`](/de/docs/Web/API/Element), Schnittstelle, die es ermöglicht, die meisten globalen Attribute abzufragen.
