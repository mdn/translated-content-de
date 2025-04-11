---
title: Globale Attribute
slug: Web/HTML/Reference/Global_attributes
l10n:
  sourceCommit: 960a94a198ca60fb04fe63857ea61d7306465791
---

{{HTMLSidebar("Global_attributes")}}

**Globale Attribute** sind Attribute, die bei allen HTML-Elementen vorkommen; sie können auf allen Elementen verwendet werden, auch wenn sie bei manchen Elementen keine Wirkung haben.

Globale Attribute können bei allen [HTML-Elementen](/de/docs/Web/HTML/Reference/Elements) angegeben werden, _sogar bei denen, die nicht im Standard angegeben sind_. Das bedeutet, dass auch nicht standardmäßige Elemente diese Attribute erlauben müssen, auch wenn die Verwendung dieser Elemente dazu führt, dass das Dokument nicht mehr HTML5-konform ist. HTML5-konforme Browser verstecken beispielsweise Inhalte, die als `<foo hidden>…</foo>` markiert sind, obwohl `<foo>` kein gültiges HTML-Element ist.

Zusätzlich zu den grundlegenden globalen HTML-Attributen gibt es auch folgende globale Attribute:

- `xml:lang` und `xml:base` — Diese stammen aus den XHTML-Spezifikationen und sind veraltet, werden jedoch aus Kompatibilitätsgründen beibehalten.
- Das ARIA-Attribut [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) und die mehrfachen [`aria-*`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes) Zustände und Eigenschaften, die zur Sicherstellung der Barrierefreiheit verwendet werden.
- Die [Event-Handler](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes)-Attribute: `onabort`, `onautocomplete`, `onautocompleteerror`, `onblur`, `oncancel`, `oncanplay`, `oncanplaythrough`, `onchange`, `onclick`, `onclose`, `oncontextmenu`, `oncuechange`, `ondblclick`, `ondrag`, `ondragend`, `ondragenter`, `ondragleave`, `ondragover`, `ondragstart`, `ondrop`, `ondurationchange`, `onemptied`, `onended`, `onerror`, `onfocus`, `oninput`, `oninvalid`, `onkeydown`, `onkeypress`, `onkeyup`, `onload`, `onloadeddata`, `onloadedmetadata`, `onloadstart`, `onmousedown`, `onmouseenter`, `onmouseleave`, `onmousemove`, `onmouseout`, `onmouseover`, `onmouseup`, `onmousewheel`, `onpause`, `onplay`, `onplaying`, `onprogress`, `onratechange`, `onreset`, `onresize`, `onscroll`, `onseeked`, `onseeking`, `onselect`, `onshow`, `onsort`, `onstalled`, `onsubmit`, `onsuspend`, `ontimeupdate`, `ontoggle`, `onvolumechange`, `onwaiting`.

## Liste der globalen Attribute

- [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey)
  - : Bietet einen Hinweis zur Erstellung einer Tastenkombination für das aktuelle Element. Dieses Attribut besteht aus einer durch Leerzeichen getrennten Liste von Zeichen. Der Browser sollte das erste verwenden, das auf der Computertastatur vorhanden ist.
- [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) {{non-standard_inline}}
  - : Verknüpft ein positioniertes Element mit einem Ankerelement. Der Wert des Attributs ist der [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Wert des Elements, an das das positionierte Element verankert werden soll. Das Element kann dann [mithilfe von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) positioniert werden.
- [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize)
  - : Steuerung, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, in welcher Weise.
- [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect)
  - : Steuerung, ob eingegebener Text automatisch auf Rechtschreibfehler korrigiert wird.
    Dies kann auf Elemente angewendet werden, die editierbaren Text haben, außer auf {{HTMLElement("input")}}-Elemente mit dem Attribut: [`type="password"`](/de/docs/Web/HTML/Reference/Elements/input/password), [`type="email"`](/de/docs/Web/HTML/Reference/Elements/input/email) oder [`type="url"`](/de/docs/Web/HTML/Reference/Elements/input/url).
- [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)
  - : Gibt an, dass ein Element beim Laden der Seite oder sobald der {{HTMLElement("dialog")}}, zu dem es gehört, angezeigt wird, fokussiert werden soll. Dieses Attribut ist ein boolesches Attribut, das initial false ist.
- [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)
  - : Eine durch Leerzeichen getrennte Liste der Klassen des Elements. Klassen ermöglichen CSS und JavaScript, bestimmte Elemente über die [Klassenselektoren](/de/docs/Web/CSS/Class_selectors) oder Funktionen wie die Methode [`Document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) auszuwählen und darauf zuzugreifen.
- [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)

  - : Ein {{Glossary("Enumerated", "enumeriertes")}} Attribut, das angibt, ob das Element vom Benutzer bearbeitbar sein soll. Falls ja, modifiziert der Browser sein Widget, um die Bearbeitung zu ermöglichen. Das Attribut muss einen der folgenden Werte annehmen:

    - `true` oder der _leere String_, was bedeutet, dass das Element bearbeitbar sein muss;
    - `false`, was bedeutet, dass das Element nicht bearbeitbar sein muss;
    - `plaintext-only`, was bedeutet, dass der rohe Text des Elements bearbeitbar ist, aber die Formatierung von Rich-Text deaktiviert ist.

- [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*)
  - : Bildet eine Klasse von Attributen, sogenannte benutzerdefinierte Datenattribute, die den Austausch von proprietären Informationen zwischen dem [HTML](/de/docs/Web/HTML)- und seinem {{Glossary("DOM", "DOM")}}-Abbild ermöglichen, die von Skripten verwendet werden können. Alle derartigen benutzerdefinierten Daten sind über das [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interface des Elements verfügbar, auf dem das Attribut gesetzt ist. Die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft bietet Zugriff auf diese Daten.
- [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)

  - : Ein enumeriertes Attribut, das die Leserichtung des Textes des Elements angibt. Es kann folgende Werte annehmen:

    - `ltr`, was _links nach rechts_ bedeutet und für Sprachen verwendet wird, die von links nach rechts geschrieben werden (wie Englisch);
    - `rtl`, was _rechts nach links_ bedeutet und für Sprachen verwendet wird, die von rechts nach links geschrieben werden (wie Arabisch);
    - `auto`, wodurch der Benutzeragent die Entscheidung trifft. Er verwendet einen grundlegenden Algorithmus, indem er die Zeichen im Element analysiert, bis er ein Zeichen mit starker Leserichtung findet. Dann wird diese Leserichtung auf das gesamte Element angewendet.

- [`draggable`](/de/docs/Web/HTML/Reference/Global_attributes/draggable)

  - : Ein enumeriertes Attribut, das angibt, ob das Element gezogen werden kann, unter Verwendung der [Drag-and-Drop-API](/de/docs/Web/API/HTML_Drag_and_Drop_API). Es kann folgende Werte annehmen:

    - `true`, was bedeutet, dass das Element gezogen werden darf;
    - `false`, was bedeutet, dass das Element nicht gezogen werden darf.

- [`enterkeyhint`](/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint)
  - : Gibt einen Hinweis, welches Aktionsetikett (oder Symbol) für die Eingabetaste auf virtuellen Tastaturen angezeigt werden soll.
- [`exportparts`](/de/docs/Web/HTML/Reference/Global_attributes/exportparts)
  - : Wird verwendet, um Schatten-Teile aus einem geschachtelten Schattenbaum transitiv in einen enthaltenden Lichtbaum zu exportieren.
- [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)
  - : Ein enumeriertes Attribut, das anzeigt, dass das Element noch nicht oder nicht mehr _relevant_ ist. Zum Beispiel kann es verwendet werden, um Elemente der Seite zu verstecken, die nicht genutzt werden können, bis der Login-Prozess abgeschlossen ist. Der Browser rendert solche Elemente nicht. Dieses Attribut darf nicht verwendet werden, um Inhalt zu verstecken, der legitim angezeigt werden könnte.
- [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)
  - : Definiert eine einzigartige Kennung (ID), die im gesamten Dokument einzigartig sein muss. Sein Zweck ist es, das Element beim Verlinken (mit einem Fragmentbezeichner), beim Skripten oder beim Styling (mit CSS) zu identifizieren.
- [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)
  - : Ein boolescher Wert, der bewirkt, dass der Browser Benutzereingaben für das Element ignoriert. Nützlich, wenn Klick-Ereignisse vorhanden sind.
- [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode)
  - : Bietet Browsern einen Hinweis auf die Konfiguration der virtuellen Tastatur, die verwendet werden soll, wenn dieses Element oder sein Inhalt bearbeitet wird. Hauptsächlich bei {{HTMLElement("input")}}-Elementen verwendet, kann aber auf jedem Element verwendet werden, während es sich im [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Modus befindet.
- [`is`](/de/docs/Web/HTML/Reference/Global_attributes/is)
  - : Ermöglicht die Angabe, dass ein standardmäßiges HTML-Element wie ein registriertes benutzerdefiniertes eingebautes Element funktionieren soll (siehe [Verwendung benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) für weitere Details).

> [!NOTE]
> Die `item*`-Attribute sind Teil des [WHATWG HTML Microdata Features](https://html.spec.whatwg.org/multipage/microdata.html#microdata).

- [`itemid`](/de/docs/Web/HTML/Reference/Global_attributes/itemid)
  - : Die eindeutige, globale Kennung eines Elements.
- [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)
  - : Wird verwendet, um einem Element Eigenschaften hinzuzufügen. Jedes HTML-Element kann ein `itemprop`-Attribut spezifiziert haben, wobei ein `itemprop` aus einem Namen-Wert-Paar besteht.
- [`itemref`](/de/docs/Web/HTML/Reference/Global_attributes/itemref)
  - : Eigenschaften, die keine Nachkommen eines Elements mit dem `itemscope`-Attribut sind, können mit dem `itemref` mit dem Element verknüpft werden. Es bietet eine Liste von Element-IDs (nicht `itemid`s) mit zusätzlichen Eigenschaften an anderer Stelle im Dokument.
- [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope)
  - : `itemscope` funktioniert (meistens) zusammen mit [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype), um anzugeben, dass das HTML in einem Block über ein bestimmtes Element handelt. `itemscope` erstellt das Element und definiert den Bereich des damit assoziierten `itemtype`. `itemtype` ist eine gültige URL eines Vokabulars (wie [schema.org](https://schema.org/)), das das Element und den Kontext seiner Eigenschaften beschreibt.
- [`itemtype`](/de/docs/Web/HTML/Reference/Global_attributes/itemtype)
  - : Gibt die URL des Vokabulars an, das verwendet wird, um `itemprop`s (Elementeigenschaften) in der Datenstruktur zu definieren. [`itemscope`](/de/docs/Web/HTML/Reference/Global_attributes/itemscope) wird verwendet, um den Bereich festzulegen, in dem das durch `itemtype` festgelegte Vokabular in der Datenstruktur aktiv ist.
- [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)
  - : Hilft, die Sprache eines Elements zu definieren: die Sprache, in der nicht bearbeitbare Elemente sind, oder die Sprache, in der bearbeitbare Elemente vom Benutzer geschrieben werden sollen. Das Attribut enthält ein "Sprachtag" (bestehend aus durch Bindestriche getrennten "Sprachuntertags") im Format, das in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} definiert ist. `xml:lang` hat Priorität darüber.
- [`nonce`](/de/docs/Web/HTML/Reference/Global_attributes/nonce)
  - : Ein kryptografisches Nonce („Nummer, die einmal verwendet wird“), das von der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verwendet werden kann, um festzustellen, ob ein bestimmter Abruf durchgeführt werden darf.
- [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)
  - : Eine durch Leerzeichen getrennte Liste der Teilnamen des Elements. Teilnamen ermöglichen CSS, spezifische Elemente in einem Schattendom-Baum über das {{CSSxRef("::part")}}-Pseudoelement auszuwählen und zu stylen.
- [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)
  - : Wird verwendet, um ein Element als Element eines Popovers zu kennzeichnen (siehe [Popover API](/de/docs/Web/API/Popover_API)). Popover-Elemente sind über `display: none` verborgen, bis sie über ein aufrufendes/steuerndes Element (d. h. ein `<button>`- oder `<input type="button">`-Element mit einem [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut) oder einen [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)-Aufruf geöffnet werden.
- [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Rollen definieren die semantische Bedeutung von Inhalten, sodass Bildschirmlesegeräte und andere Tools Inhalte konsistent mit den Benutzererwartungen zu diesem Objekttyp präsentieren und die Interaktion damit unterstützen können. `roles` werden HTML-Elementen hinzugefügt, durch `role="role_type"`, wobei `role_type` der Name einer Rolle in der ARIA-Spezifikation ist.
- [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot)
  - : Weist einem Element einen Platz in einem [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)-Schattendom-Baum zu: Ein Element mit einem `slot`-Attribut wird dem durch das {{HTMLElement("slot")}}-Element erstellten Slot zugewiesen, dessen [`name`](/de/docs/Web/HTML/Reference/Elements/slot#name)-Attributwert mit dem Wert des `slot`-Attributs übereinstimmt.
- [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)

  - : Ein enumeriertes Attribut, das definiert, ob das Element auf Rechtschreibfehler überprüft werden kann. Es kann folgende Werte haben:

    - leerer String oder `true`, was bedeutet, dass das Element, falls möglich, auf Rechtschreibfehler überprüft werden sollte;
    - `false`, was bedeutet, dass das Element nicht auf Rechtschreibfehler überprüft werden soll.

- [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)
  - : Enthält [CSS](/de/docs/Web/CSS)-Stil-Deklarationen, die auf das Element angewendet werden sollen. Beachten Sie, dass empfohlen wird, Stile in einer separaten Datei oder Dateien zu definieren. Dieses Attribut und das {{HTMLElement("style")}}-Element haben hauptsächlich den Zweck, ein schnelles Styling zu ermöglichen, beispielsweise zu Testzwecken.
- [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)

  - : Ein integer Attribut, das angibt, ob das Element den Eingabefokus annehmen kann (fokussierbar ist), ob es an der sequentiellen Tastaturnavigation teilnehmen soll und, falls ja, an welcher Position. Es kann mehrere Werte annehmen:

    - ein _negativer Wert_ bedeutet, dass das Element fokussierbar sein sollte, aber nicht über die sequentielle Tastaturnavigation erreichbar sein sollte;
    - `0` bedeutet, dass das Element fokussierbar und über die sequentielle Tastaturnavigation erreichbar sein sollte, aber seine relative Reihenfolge wird durch die Plattformkonvention definiert;
    - ein _positiver Wert_ bedeutet, dass das Element fokussierbar und über die sequentielle Tastaturnavigation erreichbar sein sollte; die Reihenfolge, in der die Elemente fokussiert werden, ist der steigende Wert des [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex). Wenn mehrere Elemente denselben Tabindex haben, folgt ihre relative Ordnung ihren relativen Positionen im Dokument.

- [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)
  - : Enthält einen Text, der beratende Informationen im Zusammenhang mit dem Element darstellt, zu dem es gehört. Solche Informationen können typischerweise, aber nicht notwendigerweise, dem Benutzer als Tooltip angezeigt werden.
- [`translate`](/de/docs/Web/HTML/Reference/Global_attributes/translate)

  - : Ein enumeriertes Attribut, das verwendet wird, um anzugeben, ob die Attributwerte eines Elements und die Werte seiner [`Text`](/de/docs/Web/API/Text)-Kindknoten beim Lokalisieren der Seite übersetzt oder unverändert bleiben sollen. Es kann folgende Werte annehmen:

    - leerer String oder `yes`, was bedeutet, dass das Element übersetzt werden soll.
    - `no`, was bedeutet, dass das Element nicht übersetzt werden soll.

- [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Reference/Global_attributes/virtualkeyboardpolicy) {{Experimental_Inline}}

  - : Ein {{Glossary("enumerated", "enumeriertes")}} Attribut, das verwendet wird, um das Verhalten der On-Screen-Virtual-Tastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten zu steuern, bei denen möglicherweise keine Hardware-Tastatur für Elemente verfügbar ist, deren Inhalt editierbar ist (zum Beispiel ein {{htmlelement("input")}}- oder {{htmlelement("textarea")}}-Element oder ein Element mit dem Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) gesetzt).

    - `auto` oder ein _leerer String_, der die virtuelle Tastatur automatisch anzeigt, wenn das Element fokussiert oder angetippt wird.
    - `manual`, das den Fokus und das Tippen auf das Element vom Zustand der virtuellen Tastatur entkoppelt.

- [`writingsuggestions`](/de/docs/Web/HTML/Reference/Global_attributes/writingsuggestions)

  - : Ein {{Glossary("enumerated", "enumeriertes")}} Attribut, das angibt, ob browserseitige Schreibvorschläge im Rahmen des Elements aktiviert sein sollten oder nicht.

    - `false`, was die Schreibvorschläge des Browsers deaktiviert.
    - `true` oder ein _leerer String_, was Schreibvorschläge aktiviert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element`](/de/docs/Web/API/Element) Schnittstelle, die das Abfragen der meisten globalen Attribute ermöglicht.
