---
title: Globale Attribute
slug: Web/HTML/Global_attributes
l10n:
  sourceCommit: 8d5d18805ad96e1c56d72de5c26de60e86dfa817
---

{{HTMLSidebar("Global_attributes")}}

**Globale Attribute** sind Attribute, die allen HTML-Elementen gemeinsam sind; sie können auf allen Elementen verwendet werden, auch wenn sie auf einigen Elementen keine Wirkung haben.

Globale Attribute können auf allen [HTML-Elementen](/de/docs/Web/HTML/Element) angegeben werden, _auch auf solchen, die nicht im Standard spezifiziert sind_. Das bedeutet, dass alle nicht standardisierten Elemente diese Attribute dennoch zulassen müssen, auch wenn die Verwendung dieser Elemente bedeutet, dass das Dokument nicht mehr HTML5-konform ist. Zum Beispiel verbergen HTML5-konforme Browser Inhalte, die als `<foo hidden>…</foo>` markiert sind, auch wenn `<foo>` kein gültiges HTML-Element ist.

Zusätzlich zu den grundlegenden globalen HTML-Attributen existieren auch folgende globale Attribute:

- `xml:lang` und `xml:base` — Diese stammen aus den XHTML-Spezifikationen und sind veraltet, werden jedoch aus Kompatibilitätsgründen beibehalten.
- Das ARIA-Attribut [`role`](/de/docs/Web/Accessibility/ARIA/Roles) und die multiplen [`aria-*`](/de/docs/Web/Accessibility/ARIA/Attributes) Zustände und Eigenschaften, die zur Sicherstellung der Zugänglichkeit verwendet werden.
- Die [Event-Handler-](/de/docs/Web/HTML/Attributes#event_handler_attributes) Attribute: `onabort`, `onautocomplete`, `onautocompleteerror`, `onblur`, `oncancel`, `oncanplay`, `oncanplaythrough`, `onchange`, `onclick`, `onclose`, `oncontextmenu`, `oncuechange`, `ondblclick`, `ondrag`, `ondragend`, `ondragenter`, `ondragleave`, `ondragover`, `ondragstart`, `ondrop`, `ondurationchange`, `onemptied`, `onended`, `onerror`, `onfocus`, `oninput`, `oninvalid`, `onkeydown`, `onkeypress`, `onkeyup`, `onload`, `onloadeddata`, `onloadedmetadata`, `onloadstart`, `onmousedown`, `onmouseenter`, `onmouseleave`, `onmousemove`, `onmouseout`, `onmouseover`, `onmouseup`, `onmousewheel`, `onpause`, `onplay`, `onplaying`, `onprogress`, `onratechange`, `onreset`, `onresize`, `onscroll`, `onseeked`, `onseeking`, `onselect`, `onshow`, `onsort`, `onstalled`, `onsubmit`, `onsuspend`, `ontimeupdate`, `ontoggle`, `onvolumechange`, `onwaiting`.

## Liste der globalen Attribute

- [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey)
  - : Bietet einen Hinweis zum Erstellen einer Tastenkombination für das aktuelle Element. Dieses Attribut besteht aus einer durch Leerzeichen getrennten Liste von Zeichen. Der Browser sollte das erste verwenden, das auf dem Computertastaturlayout existiert.
- [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) {{non-standard_inline}}
  - : Verknüpft ein positioniertes Element mit einem Ankerelement. Der Wert des Attributs ist der [`id`](/de/docs/Web/HTML/Global_attributes/id)-Wert des Elements, das Sie mit dem positionierten Element verankern möchten. Das Element kann dann [mittels CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) positioniert werden.
- [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize)
  - : Kontrolliert, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, auf welche Weise.
- [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect)
  - : Kontrolliert, ob eingegebener Text automatisch auf Rechtschreibfehler korrigiert wird.
    Dies kann auf Elemente angewendet werden, die editierbaren Text haben, außer für {{HTMLElement("input")}}-Elemente mit den Attributen: [`type="password"`](/de/docs/Web/HTML/Element/input/password), [`type="email"`](/de/docs/Web/HTML/Element/input/email) oder [`type="url"`](/de/docs/Web/HTML/Element/input/url).
- [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)
  - : Zeigt an, dass ein Element beim Laden der Seite oder sobald das {{HTMLElement("dialog")}}, dessen Teil es ist, angezeigt wird, fokussiert werden soll. Dieses Attribut ist ein boolescher Wert, der anfänglich auf false gesetzt ist.
- [`class`](/de/docs/Web/HTML/Global_attributes/class)
  - : Eine durch Leerzeichen getrennte Liste der Klassen des Elements. Klassen erlauben es, dass CSS und JavaScript spezifische Elemente über die [Klassenselektoren](/de/docs/Web/CSS/Class_selectors) oder Funktionen wie die Methode [`Document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) auswählen und darauf zugreifen.
- [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)

  - : Ein {{Glossary("Enumerated", "aufgezähltes")}} Attribut, das angibt, ob das Element vom Benutzer bearbeitbar sein soll. Wenn ja, ändert der Browser sein Widget, um die Bearbeitung zu ermöglichen. Das Attribut muss einen der folgenden Werte annehmen:

    - `true` oder den _leeren String_, was anzeigt, dass das Element bearbeitbar sein muss;
    - `false`, was anzeigt, dass das Element nicht bearbeitbar sein darf.
    - `plaintext-only`, was bedeutet, dass der reine Text des Elements bearbeitbar ist, aber die Formatierung von Rich Text deaktiviert ist.

- [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*)
  - : Bildet eine Klasse von Attributen, genannt benutzerdefinierte Datenattribute, die es ermöglichen, proprietäre Informationen zwischen dem [HTML](/de/docs/Web/HTML) und seiner {{Glossary("DOM", "DOM-")}} Darstellung auszutauschen, die von Skripten verwendet werden können. Alle diese benutzerdefinierten Daten sind über die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle des Elements, auf dem das Attribut gesetzt ist, verfügbar. Die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft gewährt Zugriff darauf.
- [`dir`](/de/docs/Web/HTML/Global_attributes/dir)

  - : Ein aufgezähltes Attribut, das die Textausrichtung des Elements angibt. Es kann folgende Werte haben:

    - `ltr`, was _von links nach rechts_ bedeutet und für Sprachen verwendet werden soll, die von links nach rechts geschrieben werden (wie Englisch);
    - `rtl`, was _von rechts nach links_ bedeutet und für Sprachen verwendet werden soll, die von rechts nach links geschrieben werden (wie Arabisch);
    - `auto`, was dem Benutzeragenten überlassen wird. Es verwendet einen grundlegenden Algorithmus, da es die Zeichen innerhalb des Elements verarbeitet, bis es ein Zeichen mit einer starken Richtung findet, dann wendet es diese Richtung auf das gesamte Element an.

- [`draggable`](/de/docs/Web/HTML/Global_attributes/draggable)

  - : Ein aufgezähltes Attribut, das anzeigt, ob das Element mittels der [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) gezogen werden kann. Es kann folgende Werte haben:

    - `true`, was bedeutet, dass das Element gezogen werden darf
    - `false`, was bedeutet, dass das Element nicht gezogen werden darf.

- [`enterkeyhint`](/de/docs/Web/HTML/Global_attributes/enterkeyhint)
  - : Gibt einen Hinweis auf die Aktion, die für die Eingabetaste auf virtuellen Tastaturen angezeigt werden soll.
- [`exportparts`](/de/docs/Web/HTML/Global_attributes/exportparts)
  - : Wird verwendet, um Schattenbestandteile von einem verschachtelten Schattenbaum in einen umgebenden Lichtbaum transitiv zu exportieren.
- [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden)
  - : Ein aufgezähltes Attribut, das anzeigt, dass das Element noch nicht oder nicht mehr _relevant_ ist. Zum Beispiel kann es verwendet werden, um Elemente der Seite auszublenden, die nicht verwendet werden können, bis der Anmeldevorgang abgeschlossen ist. Der Browser rendert solche Elemente nicht. Dieses Attribut darf nicht verwendet werden, um Inhalte zu verstecken, die legitim angezeigt werden könnten.
- [`id`](/de/docs/Web/HTML/Global_attributes/id)
  - : Definiert einen eindeutigen Bezeichner (ID), der im gesamten Dokument eindeutig sein muss. Sein Zweck ist es, das Element beim Verlinken (verwendet einen Fragmentbezeichner), Skripting oder Styling (mit CSS) zu identifizieren.
- [`inert`](/de/docs/Web/HTML/Global_attributes/inert)
  - : Ein boolescher Wert, der den Browser dazu veranlasst, Benutzereingabe-Ereignisse für das Element zu ignorieren. Nützlich, wenn Klickereignisse vorhanden sind.
- [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode)
  - : Gibt einen Hinweis an Browser, welche Art von virtueller Tastaturkonfiguration beim Bearbeiten dieses Elements oder seines Inhalts verwendet werden soll. Wird hauptsächlich bei {{HTMLElement("input")}}-Elementen verwendet, kann aber bei jedem Element im [`contenteditable`](#contenteditable)-Modus verwendet werden.
- [`is`](/de/docs/Web/HTML/Global_attributes/is)
  - : Erlaubt es Ihnen zu spezifizieren, dass ein standardmäßiges HTML-Element sich wie ein registriertes benutzerdefiniertes eingebautes Element verhalten soll (siehe [Verwendung benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) für weitere Details).

> [!NOTE]
> Die `item*`-Attribute sind Teil des [WHATWG-HTML-Microdata-Features](https://html.spec.whatwg.org/multipage/microdata.html#microdata).

- [`itemid`](/de/docs/Web/HTML/Global_attributes/itemid)
  - : Der eindeutige, globale Bezeichner eines Elements.
- [`itemprop`](/de/docs/Web/HTML/Global_attributes/itemprop)
  - : Wird verwendet, um einem Element Eigenschaften hinzuzufügen. Jedes HTML-Element kann ein `itemprop`-Attribut haben, wobei ein `itemprop` aus einem Namen-Wert-Paar besteht.
- [`itemref`](/de/docs/Web/HTML/Global_attributes/itemref)
  - : Eigenschaften, die keine Nachkommen eines Elements mit dem Attribut `itemscope` sind, können mit einem `itemref` dem Element zugeordnet werden. Es liefert eine Liste von Element-IDs (nicht `itemid`s) mit zusätzlichen Eigenschaften an anderer Stelle im Dokument.
- [`itemscope`](/de/docs/Web/HTML/Global_attributes/itemscope)
  - : `itemscope` funktioniert (in der Regel) zusammen mit [`itemtype`](/de/docs/Web/HTML/Global_attributes/itemtype), um anzugeben, dass das HTML, das in einem Block enthalten ist, über ein bestimmtes Element handelt. `itemscope` erstellt das Item und definiert den Umfang des damit verbundenen `itemtype`. `itemtype` ist eine gültige URL eines Vokabulars (wie [schema.org](https://schema.org/)), das das Element und das Kontext der Eigenschaften beschreibt.
- [`itemtype`](/de/docs/Web/HTML/Global_attributes/itemtype)
  - : Legt die URL des Vokabulars fest, das zur Definition von `itemprop`s (Elementeigenschaften) in der Datenstruktur verwendet wird. [`itemscope`](/de/docs/Web/HTML/Global_attributes/itemscope) wird verwendet, um den Bereich festzulegen, in dem die von `itemtype` festgelegte Vokabel in der Datenstruktur aktiv sein wird.
- [`lang`](/de/docs/Web/HTML/Global_attributes/lang)
  - : Hilft, die Sprache eines Elements zu definieren: die Sprache, in der nicht bearbeitbare Elemente vorliegen, oder die Sprache, in der bearbeitbare Elemente vom Benutzer geschrieben werden sollen. Das Attribut enthält ein "Sprachtag" (bestehend aus Bindestrich-getrennten "Sprachsubtags") im Format, das in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} definiert ist. `xml:lang` hat Vorrang darüber.
- [`nonce`](/de/docs/Web/HTML/Global_attributes/nonce)
  - : Eine kryptografische Zufallszahl ("number used once"), die von der [Content Security Policy](/de/docs/Web/HTTP/CSP) verwendet werden kann, um zu bestimmen, ob ein bestimmter Abruf fortfahren darf oder nicht.
- [`part`](/de/docs/Web/HTML/Global_attributes/part)
  - : Eine durch Leerzeichen getrennte Liste der Teilnamen des Elements. Teilnamen erlauben es, dass CSS über das {{CSSxRef("::part")}} Pseudo-Element spezifische Elemente in einem Schattenbaum auswählt und stylt.
- [`popover`](/de/docs/Web/HTML/Global_attributes/popover)
  - : Wird verwendet, um ein Element als Popover-Element zu kennzeichnen (siehe [Popover-API](/de/docs/Web/API/Popover_API)). Popover-Elemente sind über `display: none` verborgen, bis sie über ein aufrufendes/kontrollierendes Element (d.h. ein `<button>` oder `<input type="button">` mit einem [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget) Attribut) oder einen Aufruf von [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) geöffnet werden.
- [`role`](/de/docs/Web/Accessibility/ARIA/Roles)
  - : Rollen definieren die semantische Bedeutung von Inhalten und ermöglichen es Screenreadern und anderen Tools, eine Interaktion mit einem Objekt auf eine Weise zu präsentieren und zu unterstützen, die den Benutzererwartungen dieses Objekttyps entspricht. `roles` werden HTML-Elementen mittels `role="role_type"` hinzugefügt, wobei `role_type` der Name einer Rolle in der ARIA-Spezifikation ist.
- [`slot`](/de/docs/Web/HTML/Global_attributes/slot)
  - : Ordnet einem Element einen Slot in einem [Schatten-DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)-Schattenbaum zu: Ein Element mit einem `slot`-Attribut wird dem Slot zugewiesen, der durch das {{HTMLElement("slot")}}-Element erstellt wurde, dessen [`name`](/de/docs/Web/HTML/Element/slot#name)-Attributwert mit dem Wert dieses `slot`-Attributs übereinstimmt.
- [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck)

  - : Ein aufgezähltes Attribut, das definiert, ob das Element auf Rechtschreibfehler überprüft werden kann. Es kann die folgenden Werte haben:

    - leerer String oder `true`, was bedeutet, dass das Element, wenn möglich, auf Rechtschreibfehler überprüft werden soll;
    - `false`, was bedeutet, dass das Element nicht auf Rechtschreibfehler überprüft werden soll.

- [`style`](/de/docs/Web/HTML/Global_attributes/style)
  - : Enthält [CSS](/de/docs/Web/CSS)-Stil-Deklarationen, die auf das Element angewendet werden sollen. Beachten Sie, dass es empfohlen wird, dass Stile in einer separaten Datei oder Dateien definiert werden. Dieses Attribut und das {{HTMLElement("style")}}-Element haben hauptsächlich den Zweck einer schnellen Stilgebung, beispielsweise zu Testzwecken.
- [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)

  - : Ein ganzzahliges Attribut, das angibt, ob das Element Eingabefokus empfangen kann (ist _fokussierbar_), ob es sich an der sequentiellen Tastaturnavigation beteiligen soll und wenn ja, in welcher Position. Es kann mehrere Werte annehmen:

    - ein _negativer Wert_ bedeutet, dass das Element fokussierbar sein soll, aber nicht über die sequentielle Tastaturnavigation erreichbar sein sollte;
    - `0` bedeutet, dass das Element fokussierbar und über die sequentielle Tastaturnavigation erreichbar sein soll, aber seine relative Reihenfolge wird durch die Plattformvorgabe definiert;
    - ein _positiver Wert_ bedeutet, dass das Element fokussierbar und über die sequentielle Tastaturnavigation erreichbar sein soll; die Reihenfolge, in der die Elemente fokussiert werden, folgt dem aufsteigenden Wert des [**tabindex**](#tabindex). Wenn mehrere Elemente denselben Tabindex teilen, folgt ihre relative Reihenfolge ihren relativen Positionen im Dokument.

- [`title`](/de/docs/Web/HTML/Global_attributes/title)
  - : Enthält einen Text, der informationsbezogene Informationen zum Element darstellt, zu dem es gehört. Solche Informationen können typischerweise, aber nicht notwendigerweise, dem Benutzer als Tooltip angezeigt werden.
- [`translate`](/de/docs/Web/HTML/Global_attributes/translate)

  - : Ein aufgezähltes Attribut, das verwendet wird, um festzulegen, ob die Attributwerte eines Elements und die Werte seiner [`Text`](/de/docs/Web/API/Text)-Knotenkinder bei der Lokalisierung der Seite übersetzt werden sollen oder ob sie unverändert bleiben sollen. Es kann folgende Werte haben:

    - leerer String oder `yes`, was bedeutet, dass das Element übersetzt wird.
    - `no`, was bedeutet, dass das Element nicht übersetzt wird.

- [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy) {{Experimental_Inline}}

  - : Ein {{Glossary("enumerated", "aufgezähltes")}} Attribut, das verwendet wird, um das Verhalten der virtuellen Tastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten zu steuern, bei denen möglicherweise keine Hardwaretastatur verfügbar ist, wenn sein Inhalt bearbeitbar ist (zum Beispiel, wenn es sich um ein {{htmlelement("input")}} oder {{htmlelement("textarea")}} Element handelt oder ein Element mit gesetztem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut ist).

    - `auto` oder ein _leerer String_, was die virtuelle Tastatur automatisch anzeigt, wenn das Element fokussiert oder angetippt wird.
    - `manual`, was den Fokus und das Antippen des Elements von dem Status der virtuellen Tastatur entkoppelt.

- [`writingsuggestions`](/de/docs/Web/HTML/Global_attributes/writingsuggestions)

  - : Ein {{Glossary("enumerated", "aufgezähltes")}} Attribut, das angibt, ob browsergestützte Schreibvorschläge im Geltungsbereich des Elements aktiviert sein sollen oder nicht.

    - `false`, was die Schreibvorschläge des Browsers deaktiviert.
    - `true` oder ein _leerer String_, was Schreibvorschläge aktiviert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element`](/de/docs/Web/API/Element)-Schnittstelle, die das Abfragen der meisten globalen Attribute ermöglicht.
