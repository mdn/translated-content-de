---
title: Globale Attribute
slug: Web/HTML/Reference/Global_attributes
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar("Global_attributes")}}

**Globale Attribute** sind Attribute, die allen HTML-Elementen gemeinsam sind; sie können auf allen Elementen verwendet werden, auch wenn sie auf einigen Elementen keine Wirkung haben.

Globale Attribute können auf allen [HTML-Elementen](/de/docs/Web/HTML/Reference/Elements) angegeben werden, _selbst auf denjenigen, die nicht im Standard spezifiziert sind_. Das bedeutet, dass auch nicht standardkonforme Elemente diese Attribute zulassen müssen, obwohl die Verwendung dieser Elemente dazu führt, dass das Dokument nicht mehr HTML5-konform ist. Beispielsweise verbergen HTML5-konforme Browser Inhalte, die als `<foo hidden>…</foo>` markiert sind, obwohl `<foo>` kein gültiges HTML-Element ist.

Zusätzlich zu den grundlegenden HTML-Globalattributen existieren auch folgende globale Attribute:

- `xml:lang` und `xml:base` — diese stammen aus den XHTML-Spezifikationen und sind veraltet, werden jedoch aus Kompatibilitätsgründen beibehalten.
- Das ARIA [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Attribut und die verschiedenen [`aria-*`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)-Zustände und -Eigenschaften, die zur Sicherstellung der Barrierefreiheit verwendet werden.
- Die [Ereignis-Handler](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes)-Attribute: `onabort`, `onautocomplete`, `onautocompleteerror`, `onblur`, `oncancel`, `oncanplay`, `oncanplaythrough`, `onchange`, `onclick`, `onclose`, `oncontextmenu`, `oncuechange`, `ondblclick`, `ondrag`, `ondragend`, `ondragenter`, `ondragleave`, `ondragover`, `ondragstart`, `ondrop`, `ondurationchange`, `onemptied`, `onended`, `onerror`, `onfocus`, `oninput`, `oninvalid`, `onkeydown`, `onkeypress`, `onkeyup`, `onload`, `onloadeddata`, `onloadedmetadata`, `onloadstart`, `onmousedown`, `onmouseenter`, `onmouseleave`, `onmousemove`, `onmouseout`, `onmouseover`, `onmouseup`, `onmousewheel`, `onpause`, `onplay`, `onplaying`, `onprogress`, `onratechange`, `onreset`, `onresize`, `onscroll`, `onseeked`, `onseeking`, `onselect`, `onshow`, `onsort`, `onstalled`, `onsubmit`, `onsuspend`, `ontimeupdate`, `ontoggle`, `onvolumechange`, `onwaiting`.

## Liste der globalen Attribute

- [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey)
  - : Bietet einen Hinweis zur Generierung einer Tastenkombination für das aktuelle Element. Dieses Attribut besteht aus einer durch Leerzeichen getrennten Liste von Zeichen. Der Browser sollte das erste verwenden, das auf dem Computertastaturlayout existiert.
- [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) {{non-standard_inline}}
  - : Verknüpft ein positioniertes Element mit einem Ankerelement. Der Wert des Attributs ist der [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Wert des Elements, an das Sie das positionierte Element anheften möchten. Das Element kann dann [mittels CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) positioniert werden.
- [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize)
  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, auf welche Weise.
- [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect)
  - : Steuert, ob eingegebener Text automatisch auf Rechtschreibfehler korrigiert wird.
    Dies kann auf Elemente angewendet werden, die bearbeitbaren Text enthalten, außer auf {{HTMLElement("input")}}-Elemente mit dem Attribut: [`type="password"`](/de/docs/Web/HTML/Reference/Elements/input/password), [`type="email"`](/de/docs/Web/HTML/Reference/Elements/input/email) oder [`type="url"`](/de/docs/Web/HTML/Reference/Elements/input/url).
- [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)
  - : Gibt an, dass ein Element beim Laden der Seite oder sobald der Dialog, dessen Teil es ist, angezeigt wird, fokussiert wird. Dieses Attribut ist ein boolesches Attribut und ist initial auf false gesetzt.
- [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)
  - : Eine durch Leerzeichen getrennte Liste der Klassen des Elements. Klassen ermöglichen es CSS und JavaScript, spezifische Elemente über die [Klassenselektoren](/de/docs/Web/CSS/Class_selectors) oder Funktionen wie die Methode [`Document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) auszuwählen und zuzugreifen.
- [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)

  - : Ein {{Glossary("Enumerated", "enumeriertes")}} Attribut, das angibt, ob das Element vom Benutzer bearbeitet werden kann. Falls ja, modifiziert der Browser sein Widget, um Bearbeitung zu ermöglichen. Das Attribut muss einen der folgenden Werte annehmen:
    - `true` oder der _leere String_, was anzeigt, dass das Element bearbeitbar sein muss;
    - `false`, was anzeigt, dass das Element nicht bearbeitbar sein darf.
    - `plaintext-only`, was anzeigt, dass der rohe Text des Elements bearbeitbar ist, aber die Rich-Text-Formatierung deaktiviert ist.

- [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*)
  - : Bildet eine Klasse von Attributen, sogenannte benutzerdefinierte Datenattribute, die es ermöglichen, proprietäre Informationen zwischen dem [HTML](/de/docs/Web/HTML) und seiner {{Glossary("DOM", "DOM")}}-Repräsentation auszutauschen, die von Skripten verwendet werden können. Alle derartigen benutzerdefinierten Daten sind über die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle des Elements, auf dem das Attribut gesetzt ist, verfügbar. Die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft gibt Zugriff auf sie.
- [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)

  - : Ein enumeriertes Attribut, das die Richtung des Textes des Elements angibt. Es kann die folgenden Werte haben:
    - `ltr`, was _von links nach rechts_ bedeutet und für Sprachen verwendet werden soll, die von links nach rechts geschrieben werden (wie Englisch);
    - `rtl`, was _von rechts nach links_ bedeutet und für Sprachen verwendet werden soll, die von rechts nach links geschrieben werden (wie Arabisch);
    - `auto`, was den Benutzeragenten entscheiden lässt. Es verwendet einen grundlegenden Algorithmus, da es die Zeichen innerhalb des Elements analysiert, bis es ein Zeichen mit einer starken Richtung findet, dann wendet es diese Richtung auf das gesamte Element an.

- [`draggable`](/de/docs/Web/HTML/Reference/Global_attributes/draggable)

  - : Ein enumeriertes Attribut, das angibt, ob das Element durch die Verwendung der [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) gezogen werden kann. Es kann die folgenden Werte haben:
    - `true`, was angibt, dass das Element gezogen werden kann
    - `false`, was angibt, dass das Element nicht gezogen werden kann.

- [`enterkeyhint`](/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint)
  - : Gibt einen Hinweis, welche Aktionsbezeichnung (oder Symbol) für die Eingabetaste auf virtuellen Tastaturen angezeigt werden soll.
- [`exportparts`](/de/docs/Web/HTML/Reference/Global_attributes/exportparts)
  - : Wird verwendet, um Shadow-Parts aus einem verschachtelten Shadow-Tree in einen enthaltenden Light-Tree transitiv zu exportieren.
- [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)
  - : Ein enumeriertes Attribut, das angibt, dass das Element noch nicht oder nicht mehr _relevant_ ist. Es kann beispielsweise verwendet werden, um Elemente der Seite zu verbergen, die erst genutzt werden können, nachdem der Login-Prozess abgeschlossen ist. Der Browser wird solche Elemente nicht rendern. Dieses Attribut darf nicht verwendet werden, um Inhalte zu verbergen, die legitim angezeigt werden könnten.
- [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)
  - : Definiert eine eindeutige Kennung (ID), die im gesamten Dokument eindeutig sein muss. Ihr Zweck ist es, das Element beim Verlinken (mithilfe eines Fragmentidentifikators), Scripting oder Styling (mit CSS) zu identifizieren.
- [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)
  - : Ein boolescher Wert, der den Browser veranlasst, Eingabereignisse des Benutzers für das Element zu ignorieren. Nützlich, wenn Klickereignisse vorhanden sind.
- [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode)
  - : Gibt einen Hinweis an Browser, welche Konfiguration der virtuellen Tastatur beim Bearbeiten dieses Elements oder seines Inhalts verwendet werden soll. Wird hauptsächlich bei {{HTMLElement("input")}}-Elementen verwendet, kann aber bei jedem Element im [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Modus genutzt werden.
- [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is)
  - : Ermöglicht es Ihnen anzugeben, dass ein standardmäßiges HTML-Element wie ein registriertes benutzerdefiniertes eingebautes Element verhalten soll (siehe [Verwendung von benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements) für weitere Details).

> [!NOTE]
> Die `item*`-Attribute sind Teil der [WHATWG HTML Microdata-Funktion](https://html.spec.whatwg.org/multipage/microdata.html#microdata).

- [`itemid`](/de/docs/Web/HTML/Reference/Global_attributes/itemid)
  - : Die eindeutige, globale Kennung eines Elements.
- [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)
  - : Wird verwendet, um Eigenschaften zu einem Element hinzuzufügen. Jedes HTML-Element kann ein `itemprop`-Attribut haben, wobei ein `itemprop` aus einem Namen-Wert-Paar besteht.
- [`itemref`](/de/docs/Web/HTML/Reference/Global_attributes/itemref)
  - : Eigenschaften, die keine Nachkommen eines Elements mit dem `itemscope`-Attribut sind, können mit einem `itemref` dem Element zugeordnet werden. Es bietet eine Liste von Element-IDs (keine `itemid`s) mit zusätzlichen Eigenschaften an anderer Stelle im Dokument.
- [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope)
  - : `itemscope` arbeitet (normalerweise) zusammen mit [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype), um anzugeben, dass das in einem Block enthaltene HTML sich auf ein bestimmtes Element bezieht. `itemscope` erstellt das Element und definiert den Geltungsbereich des damit verbundenen `itemtype`. `itemtype` ist eine gültige URL eines Vokabulars (wie [schema.org](https://schema.org/)), das den Kontext des Elements und seiner Eigenschaften beschreibt.
- [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype)
  - : Gibt die URL des Vokabulars an, das zum Definieren von `itemprop`s (Element-Eigenschaften) in der Datenstruktur verwendet wird. [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope) wird verwendet, um den Bereich festzulegen, in dem das durch `itemtype` festgelegte Vokabular aktiv ist.
- [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)
  - : Hilft, die Sprache eines Elements zu definieren: die Sprache, in der nicht bearbeitbare Elemente vorliegen, oder die Sprache, die bei bearbeitbaren Elementen vom Benutzer geschrieben werden soll. Das Attribut enthält ein "Sprachtag" (bestehend aus Bindestrich-getrennten "Sprach-Subtags") im Format, wie es in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} definiert ist. `xml:lang` hat gegenüber ihm Vorrang.
- [`nonce`](/de/docs/Web/HTML/Reference/Global_attributes/nonce)
  - : Ein kryptographischer Nonce ("Nummer, die nur einmal verwendet wird"), der von der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verwendet werden kann, um zu bestimmen, ob ein bestimmter Abruf durchgeführt werden darf oder nicht.
- [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)
  - : Eine durch Leerzeichen getrennte Liste der Teile-Namen des Elements. Teile-Namen ermöglichen es CSS, spezifische Elemente in einem Shadow-Tree über das {{CSSxRef("::part")}} Pseudo-Element auszuwählen und zu stylen.
- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)
  - : Wird verwendet, um ein Element als Popover-Element zu kennzeichnen (siehe [Popover-API](/de/docs/Web/API/Popover_API)). Popover-Elemente sind durch `display: none` versteckt, bis sie über ein ansteuerndes/steuerelement (d.h. ein `<button>` oder `<input type="button">` mit einem [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut) oder einen [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)-Aufruf geöffnet werden.
- [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Rollen definieren die semantische Bedeutung von Inhalten, sodass Bildschirmleser und andere Tools ein Objekt auf eine Weise präsentieren und Interaktionen mit einem Objekt unterstützen können, die mit den Benutzererwartungen für diesen Objekttyp übereinstimmen. `roles` werden HTML-Elementen mittels `role="role_type"` hinzugefügt, wobei `role_type` der Name einer Rolle in der ARIA-Spezifikation ist.
- [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot)
  - : Weist einem Element einen Slot in einem [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)-Shadow-Tree zu: Ein Element mit einem `slot`-Attribut wird dem Slot zugeordnet, der durch das {{HTMLElement("slot")}}-Element erstellt wurde, dessen [`name`](/de/docs/Web/HTML/Reference/Elements/slot#name)-Attributwert mit dem Wert dieses `slot`-Attributs übereinstimmt.
- [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)

  - : Ein enumeriertes Attribut, das definiert, ob das Element auf Rechtschreibfehler überprüft werden darf. Es kann die folgenden Werte haben:
    - leerer String oder `true`, was angibt, dass das Element, wenn möglich, auf Rechtschreibfehler überprüft werden soll;
    - `false`, was angibt, dass das Element nicht auf Rechtschreibfehler überprüft werden soll.

- [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)
  - : Enthält [CSS](/de/docs/Web/CSS)-Stildeklarationen, die auf das Element angewendet werden sollen. Beachten Sie, dass es empfohlen wird, Stile in einer separaten Datei oder Dateien zu definieren. Dieses Attribut und das {{HTMLElement("style")}}-Element haben hauptsächlich den Zweck, ein schnelles Styling zu ermöglichen, beispielsweise zu Testzwecken.
- [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)

  - : Ein ganzzahliges Attribut, das angibt, ob das Element Eingabefokus erhalten kann (fokusierbar ist), ob es an der sequentiellen Tastaturnavigation teilnehmen soll und falls ja, an welcher Position. Es kann mehrere Werte annehmen:
    - ein _negativer Wert_ bedeutet, dass das Element fokussierbar sein soll, aber nicht über die sequentielle Tastaturnavigation erreichbar sein soll;
    - `0` bedeutet, dass das Element fokussierbar und über die sequentielle Tastaturnavigation erreichbar sein soll, aber seine relative Reihenfolge wird durch die Plattformkonvention definiert;
    - ein _positiver Wert_ bedeutet, dass das Element fokussierbar und über die sequentielle Tastaturnavigation erreichbar sein soll; die Reihenfolge, in der die Elemente fokussiert werden, ist der aufsteigende Wert des [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex). Wenn mehrere Elemente denselben Tabindex haben, folgt ihre relative Reihenfolge ihren relativen Positionen im Dokument.

- [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)
  - : Enthält einen Text, der beratende Informationen in Bezug auf das zugehörige Element darstellt. Solche Informationen können dem Benutzer typischerweise, aber nicht notwendigerweise, als Tooltip angezeigt werden.
- [`translate`](/de/docs/Web/HTML/Reference/Global_attributes/translate)

  - : Ein enumeriertes Attribut, das verwendet wird, um anzugeben, ob die Attributwerte eines Elements und die Werte seiner [`Text`](/de/docs/Web/API/Text)-Knoten-Kinder bei der Lokalisierung der Seite übersetzt oder unverändert gelassen werden sollen. Es kann die folgenden Werte haben:
    - leerer String oder `yes`, was angibt, dass das Element übersetzt wird.
    - `no`, was angibt, dass das Element nicht übersetzt wird.

- [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Reference/Global_attributes/virtualkeyboardpolicy) {{Experimental_Inline}}

  - : Ein {{Glossary("enumerated", "enumeriertes")}} Attribut, das verwendet wird, um das Verhalten der Bildschirmtastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten zu steuern, bei denen möglicherweise keine Hardwaretastatur für Elemente verfügbar ist, deren Inhalt bearbeitbar ist (z. B. es ist ein {{htmlelement("input")}}- oder {{htmlelement("textarea")}}-Element oder ein Element mit dem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut).
    - `auto` oder ein _leerer String_, was die Bildschirmtastatur automatisch anzeigt, wenn das Element fokussiert oder angetippt wird.
    - `manual`, was den Fokus und das Antippen des Elements von der Anzeige der Bildschirmtastatur entkoppelt.

- [`writingsuggestions`](/de/docs/Web/HTML/Reference/Global_attributes/writingsuggestions)
  - : Ein {{Glossary("enumerated", "enumeriertes")}} Attribut, das angibt, ob Browser-unterstützte Vorschläge zum Schreiben im Geltungsbereich des Elements aktiviert werden sollen oder nicht.
    - `false`, was die Vorschläge des Browsers zum Schreiben deaktiviert.
    - `true` oder ein _leerer String_, was die Vorschläge zum Schreiben aktiviert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element`](/de/docs/Web/API/Element)-Schnittstelle, die das Abfragen der meisten globalen Attribute ermöglicht.
