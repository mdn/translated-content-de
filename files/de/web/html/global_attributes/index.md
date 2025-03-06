---
title: Globale Attribute
slug: Web/HTML/Global_attributes
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar("Global_attributes")}}

**Globale Attribute** sind Attribute, die allen HTML-Elementen gemeinsam sind; sie können bei allen Elementen verwendet werden, obwohl sie bei einigen Elementen keine Wirkung haben können.

Globale Attribute können bei allen [HTML-Elementen](/de/docs/Web/HTML/Element) angegeben werden, _auch bei denen, die im Standard nicht spezifiziert sind_. Das bedeutet, dass alle nicht standardmäßigen Elemente diese Attribute trotzdem zulassen müssen, auch wenn die Verwendung dieser Elemente bedeutet, dass das Dokument nicht mehr HTML5-konform ist. Beispielsweise verstecken HTML5-konforme Browser Inhalte, die als `<foo hidden>…</foo>` markiert sind, obwohl `<foo>` kein gültiges HTML-Element ist.

Neben den grundlegenden HTML-Globalattributen existieren auch folgende globale Attribute:

- `xml:lang` und `xml:base` — diese sind aus den XHTML-Spezifikationen übernommen und veraltet, werden aber aus Kompatibilitätsgründen beibehalten.
- Das ARIA-Attribut [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) und die verschiedenen [`aria-*`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes) Zustände und Eigenschaften, die zur Sicherstellung der Barrierefreiheit verwendet werden.
- Die [Event-Handler](/de/docs/Web/HTML/Attributes#event_handler_attributes) Attribute: `onabort`, `onautocomplete`, `onautocompleteerror`, `onblur`, `oncancel`, `oncanplay`, `oncanplaythrough`, `onchange`, `onclick`, `onclose`, `oncontextmenu`, `oncuechange`, `ondblclick`, `ondrag`, `ondragend`, `ondragenter`, `ondragleave`, `ondragover`, `ondragstart`, `ondrop`, `ondurationchange`, `onemptied`, `onended`, `onerror`, `onfocus`, `oninput`, `oninvalid`, `onkeydown`, `onkeypress`, `onkeyup`, `onload`, `onloadeddata`, `onloadedmetadata`, `onloadstart`, `onmousedown`, `onmouseenter`, `onmouseleave`, `onmousemove`, `onmouseout`, `onmouseover`, `onmouseup`, `onmousewheel`, `onpause`, `onplay`, `onplaying`, `onprogress`, `onratechange`, `onreset`, `onresize`, `onscroll`, `onseeked`, `onseeking`, `onselect`, `onshow`, `onsort`, `onstalled`, `onsubmit`, `onsuspend`, `ontimeupdate`, `ontoggle`, `onvolumechange`, `onwaiting`.

## Liste der globalen Attribute

- [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey)
  - : Gibt einen Hinweis zur Erstellung einer Tastenkombination für das aktuelle Element. Dieses Attribut besteht aus einer durch Leerzeichen getrennten Liste von Zeichen. Der Browser sollte das erste verwenden, das auf dem Computer-Tastaturlayout existiert.
- [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) {{non-standard_inline}}
  - : Verknüpft ein positioniertes Element mit einem Ankerelement. Der Wert des Attributs ist der [`id`](/de/docs/Web/HTML/Global_attributes/id)-Wert des Elements, zu dem Sie das positionierte Element verankern möchten. Das Element kann dann durch [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) positioniert werden.
- [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize)
  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, auf welche Weise.
- [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect)
  - : Steuert, ob eingegebener Text automatisch auf Rechtschreibfehler korrigiert wird. Dies kann auf Elemente angewendet werden, die bearbeitbaren Text haben, mit Ausnahme von {{HTMLElement("input")}}-Elementen mit den Attributen: [`type="password"`](/de/docs/Web/HTML/Element/input/password), [`type="email"`](/de/docs/Web/HTML/Element/input/email) oder [`type="url"`](/de/docs/Web/HTML/Element/input/url).
- [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)
  - : Gibt an, dass ein Element beim Laden der Seite oder sobald der {{HTMLElement("dialog")}}, zu dem es gehört, angezeigt wird, fokussiert werden soll. Dieses Attribut ist ein boolesches Attribut und initial auf false gesetzt.
- [`class`](/de/docs/Web/HTML/Global_attributes/class)
  - : Eine durch Leerzeichen getrennte Liste von Klassen des Elements. Klassen ermöglichen es CSS und JavaScript, bestimmte Elemente über [Klassenselektoren](/de/docs/Web/CSS/Class_selectors) oder Funktionen wie der Methode [`Document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) auszuwählen und darauf zuzugreifen.
- [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)

  - : Ein {{Glossary("Enumerated", "aufgezähltes")}} Attribut, das angibt, ob das Element vom Benutzer bearbeitbar sein soll. Wenn ja, ändert der Browser sein Widget, um die Bearbeitung zu ermöglichen. Das Attribut muss einen der folgenden Werte annehmen:

    - `true` oder der _leere String_, was angibt, dass das Element bearbeitbar sein muss;
    - `false`, was angibt, dass das Element nicht bearbeitbar sein darf.
    - `plaintext-only`, was angibt, dass der Rohtext des Elements bearbeitbar ist, aber Rich-Text-Formatierung deaktiviert ist.

- [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*)
  - : Bildet eine Klasse von Attributen, genannt benutzerdefinierte Datenattribute, die es ermöglichen, proprietäre Informationen zwischen dem [HTML](/de/docs/Web/HTML) und seiner {{Glossary("DOM", "DOM")}} Darstellung auszutauschen, die von Skripten verwendet werden können. Alle solchen benutzerdefinierten Daten sind über die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle des Elements, auf dem das Attribut gesetzt ist, verfügbar. Die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft bietet Zugriff darauf.
- [`dir`](/de/docs/Web/HTML/Global_attributes/dir)

  - : Ein aufgezähltes Attribut, das die Ausrichtung des Textes im Element angibt. Es kann die folgenden Werte haben:

    - `ltr`, was _links nach rechts_ bedeutet und für Sprachen verwendet werden soll, die von links nach rechts geschrieben werden (wie Englisch);
    - `rtl`, was _rechts nach links_ bedeutet und für Sprachen verwendet werden soll, die von rechts nach links geschrieben werden (wie Arabisch);
    - `auto`, das den Benutzeragenten entscheiden lässt. Es verwendet einen einfachen Algorithmus, indem es die Zeichen im Element parst, bis es ein Zeichen mit starker Richtung findet, und wendet dann diese Richtung auf das gesamte Element an.

- [`draggable`](/de/docs/Web/HTML/Global_attributes/draggable)

  - : Ein aufgezähltes Attribut, das angibt, ob das Element mit der [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) gezogen werden kann. Es kann die folgenden Werte haben:

    - `true`, was angibt, dass das Element gezogen werden darf
    - `false`, was angibt, dass das Element nicht gezogen werden darf.

- [`enterkeyhint`](/de/docs/Web/HTML/Global_attributes/enterkeyhint)
  - : Gibt einen Hinweis darauf, welches Aktionslabel (oder Icon) auf virtuellen Tastaturen für die Eingabetaste angezeigt werden soll.
- [`exportparts`](/de/docs/Web/HTML/Global_attributes/exportparts)
  - : Wird verwendet, um Schattenpartien von einem verschachtelten Schattendokument in einen enthaltenden Lichtbaum zu exportieren.
- [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden)
  - : Ein aufgezähltes Attribut, das anzeigt, dass das Element noch nicht oder nicht mehr _relevant_ ist. Zum Beispiel kann es verwendet werden, um Elemente der Seite zu verstecken, die erst benutzt werden können, wenn der Anmeldevorgang abgeschlossen ist. Der Browser rendert solche Elemente nicht. Dieses Attribut darf nicht verwendet werden, um Inhalte zu verbergen, die legitim angezeigt werden dürften.
- [`id`](/de/docs/Web/HTML/Global_attributes/id)
  - : Definiert einen eindeutigen Bezeichner (ID), der im gesamten Dokument eindeutig sein muss. Sein Zweck ist es, das Element beim Verlinken (mittels eines Fragmentbezeichners), Scripting oder Styling (mit CSS) zu identifizieren.
- [`inert`](/de/docs/Web/HTML/Global_attributes/inert)
  - : Ein boolescher Wert, der den Browser veranlasst, Benutzereingabeereignisse für das Element zu ignorieren. Nützlich, wenn Click-Ereignisse vorhanden sind.
- [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode)
  - : Gibt Browsern einen Hinweis über die Art der virtuellen Tastatur, die verwendet werden soll, wenn dieses Element oder dessen Inhalt bearbeitet wird. Wird hauptsächlich bei {{HTMLElement("input")}}-Elementen verwendet, kann aber auf jedes Element in [`contenteditable`](#contenteditable)-Modus angewendet werden.
- [`is`](/de/docs/Web/HTML/Global_attributes/is)
  - : Ermöglicht es Ihnen, anzugeben, dass ein standardmäßiges HTML-Element wie ein registriertes benutzerdefiniertes eingebautes Element funktionieren soll (siehe [Custom Elements verwenden](/de/docs/Web/API/Web_components/Using_custom_elements) für weitere Details).

> [!NOTE]
> Die `item*` Attribute sind Teil des [WHATWG HTML Microdata-Features](https://html.spec.whatwg.org/multipage/microdata.html#microdata).

- [`itemid`](/de/docs/Web/HTML/Global_attributes/itemid)
  - : Der eindeutige, globale Bezeichner eines Eintrags.
- [`itemprop`](/de/docs/Web/HTML/Global_attributes/itemprop)
  - : Wird verwendet, um einem Eintrag Eigenschaften hinzuzufügen. Jedes HTML-Element kann ein `itemprop`-Attribut haben, wobei ein `itemprop` aus einem Name-Wert-Paar besteht.
- [`itemref`](/de/docs/Web/HTML/Global_attributes/itemref)
  - : Eigenschaften, die keine Nachkommen eines Elements mit dem `itemscope`-Attribut sind, können mit dem Eintrag mithilfe eines `itemref` verknüpft werden. Es bietet eine Liste von Element-IDs (nicht `itemid`s) mit zusätzlichen Eigenschaften an anderer Stelle im Dokument.
- [`itemscope`](/de/docs/Web/HTML/Global_attributes/itemscope)
  - : `itemscope` funktioniert normalerweise zusammen mit [`itemtype`](/de/docs/Web/HTML/Global_attributes/itemtype), um anzugeben, dass das in einem Block enthaltene HTML zu einem bestimmten Eintrag gehört. `itemscope` erstellt das Item und definiert den Umfang des mit ihm verbundenen `itemtype`. `itemtype` ist eine gültige URL eines Vokabulars (wie [schema.org](https://schema.org/)), das den Artikel und seinen Eigenschaftskontext beschreibt.
- [`itemtype`](/de/docs/Web/HTML/Global_attributes/itemtype)
  - : Gibt die URL des Vokabulars an, das verwendet wird, um `itemprop`s (Elementeigenschaften) in der Datenstruktur zu definieren. [`itemscope`](/de/docs/Web/HTML/Global_attributes/itemscope) wird verwendet, um den Umfang festzulegen, in dem das durch `itemtype` festgelegte Vokabular in der Datenstruktur aktiv ist.
- [`lang`](/de/docs/Web/HTML/Global_attributes/lang)
  - : Hilft, die Sprache eines Elements zu definieren: die Sprache, in der nicht bearbeitbare Elemente verfasst sind, oder die Sprache, in der bearbeitbare Elemente vom Benutzer geschrieben werden sollen. Das Attribut enthält ein "Sprachentoken" (bestehend aus durch Bindestriche getrennten "Sprachensubtoken") im Format definiert in {{RFC(5646, "Tags zur Identifizierung von Sprachen (auch bekannt als BCP 47)")}}. `xml:lang` hat Vorrang vor ihm.
- [`nonce`](/de/docs/Web/HTML/Global_attributes/nonce)
  - : Ein kryptografischer Nonce ("once used number"), den [Content Security Policy](/de/docs/Web/HTTP/CSP) verwenden kann, um zu bestimmen, ob ein gegebener Abruf fortgesetzt werden darf oder nicht.
- [`part`](/de/docs/Web/HTML/Global_attributes/part)
  - : Eine durch Leerzeichen getrennte Liste der Teilenamen des Elements. Teilenamen ermöglichen es CSS, spezifische Elemente in einem Schattenbaum über das {{CSSxRef("::part")}}-Pseudoelement auszuwählen und zu stylen.
- [`popover`](/de/docs/Web/HTML/Global_attributes/popover)
  - : Wird verwendet, um ein Element als Popover-Element zu bezeichnen (siehe [Popover API](/de/docs/Web/API/Popover_API)). Popover-Elemente sind durch `display: none` versteckt, bis sie über ein aufrufendes Kontrollement (z. B. ein `<button>` oder `<input type="button">` mit einem [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)-Attribut) oder ein [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)-Aufruf geöffnet werden.
- [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Rollen definieren die semantische Bedeutung von Inhalten und ermöglichen es Bildschirmlesern und anderen Tools, die Interaktion mit einem Objekt auf eine Weise zu unterstützen, die mit den Benutzererwartungen für diesen Objekttyp konsistent ist. `roles` werden HTML-Elementen mit `role="role_type"` hinzugefügt, wobei `role_type` der Name einer Rolle in der ARIA-Spezifikation ist.
- [`slot`](/de/docs/Web/HTML/Global_attributes/slot)
  - : Weist einem Element einen Slot in einem [Schatten-DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)-Schattenbaum zu: Ein Element mit einem `slot`-Attribut wird dem Slot zugewiesen, der durch das {{HTMLElement("slot")}}-Element erstellt wurde, dessen [`name`](/de/docs/Web/HTML/Element/slot#name)-Attributwert mit dem Wert dieses `slot`-Attributs übereinstimmt.
- [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck)

  - : Ein aufgezähltes Attribut, das definiert, ob das Element auf Rechtschreibfehler überprüft werden darf. Es kann die folgenden Werte haben:

    - leerer String oder `true`, was anzeigt, dass das Element, wenn möglich, auf Rechtschreibfehler überprüft werden soll;
    - `false`, was anzeigt, dass das Element nicht auf Rechtschreibfehler überprüft werden darf.

- [`style`](/de/docs/Web/HTML/Global_attributes/style)
  - : Enthält [CSS](/de/docs/Web/CSS)-Styling-Deklarationen, die auf das Element angewendet werden sollen. Beachten Sie, dass es empfohlen wird, Stile in einer separaten Datei oder mehreren Dateien zu definieren. Dieses Attribut und das {{HTMLElement("style")}}-Element haben hauptsächlich den Zweck, eine schnelle Stilgebung zu ermöglichen, beispielsweise zu Testzwecken.
- [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)

  - : Ein ganzzahliges Attribut, das angibt, ob das Element Eingabefokus (ist _fokussierbar_) erhalten kann, ob es an der sequentiellen Tastaturnavigation teilnehmen soll, und falls ja, an welcher Position. Es kann mehrere Werte annehmen:

    - ein _negativer Wert_ bedeutet, dass das Element fokussierbar sein sollte, aber nicht über die sequentielle Tastaturnavigation erreicht werden kann;
    - `0` bedeutet, dass das Element fokussierbar und über die sequentielle Tastaturnavigation erreichbar sein sollte, aber seine relative Reihenfolge wird durch die Plattformkonvention definiert;
    - ein _positiver Wert_ bedeutet, dass das Element fokussierbar und über die sequentielle Tastaturnavigation erreichbar sein sollte; die Reihenfolge, in der die Elemente fokussiert werden, ist der aufsteigende Wert des [**tabindex**](#tabindex). Wenn mehrere Elemente den gleichen tabindex haben, folgt ihre relative Ordnung ihren relativen Positionen im Dokument.

- [`title`](/de/docs/Web/HTML/Global_attributes/title)
  - : Enthält einen Text, der beratende Informationen zu dem Element darstellt, zu dem er gehört. Solche Informationen können in der Regel, aber nicht notwendigerweise, dem Benutzer als Tooltip präsentiert werden.
- [`translate`](/de/docs/Web/HTML/Global_attributes/translate)

  - : Ein aufgezähltes Attribut, das verwendet wird, um anzugeben, ob die Attributwerte eines Elements und die Werte seiner [`Text`](/de/docs/Web/API/Text)-Knoten-Kinder beim Lokalisieren der Seite übersetzt werden sollen oder ob sie unverändert bleiben sollen. Es kann die folgenden Werte haben:

    - leerer String oder `yes`, was anzeigt, dass das Element übersetzt wird.
    - `no`, was anzeigt, dass das Element nicht übersetzt wird.

- [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy) {{Experimental_Inline}}

  - : Ein {{Glossary("enumerated", "aufgezähltes")}} Attribut, das verwendet wird, um das Verhalten der Bildschirmtastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten zu steuern, bei denen möglicherweise keine Hardware-Tastatur für Elemente verfügbar ist, deren Inhalt bearbeitbar ist (zum Beispiel ein {{htmlelement("input")}} oder {{htmlelement("textarea")}}-Element, oder ein Element mit dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut).

    - `auto` oder ein _leerer String_, das automatisch die virtuelle Tastatur anzeigt, wenn das Element fokussiert oder angetippt wird.
    - `manual`, das Fokus und Tipp auf das Element von dem Zustand der virtuellen Tastatur entkoppelt.

- [`writingsuggestions`](/de/docs/Web/HTML/Global_attributes/writingsuggestions)

  - : Ein {{Glossary("enumerated", "aufgezähltes")}} Attribut, das angibt, ob vom Browser bereitgestellte Schreibvorschläge im Rahmen des Elements aktiviert sein sollen oder nicht.

    - `false`, was die Schreibvorschläge des Browsers deaktiviert.
    - `true` oder ein _leerer String_, was Schreibvorschläge aktiviert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element`](/de/docs/Web/API/Element)-Schnittstelle, die das Abfragen der meisten globalen Attribute ermöglicht.
