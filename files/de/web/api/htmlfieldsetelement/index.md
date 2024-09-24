---
title: HTMLFieldSetElement
slug: Web/API/HTMLFieldSetElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{APIRef("HTML DOM")}}

Die **`HTMLFieldSetElement`**-Schnittstelle bietet spezielle Eigenschaften und Methoden (zusätzlich zu denen der regelmäßig durch Vererbung verfügbaren {{domxref("HTMLElement")}}-Schnittstelle) zur Manipulation der Gestaltung und Präsentation von {{ HTMLElement("fieldset") }}-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("HTMLElement")}}._

- {{domxref("HTMLFieldSetElement.disabled")}}
  - : Ein boolescher Wert, der das [`disabled`](/de/docs/Web/HTML/Element/fieldset#disabled)-HTML-Attribut widerspiegelt und angibt, ob der Benutzer mit dem Steuerelement interagieren kann.
- {{domxref("HTMLFieldSetElement.elements")}} {{ReadOnlyInline}}
  - : Die Elemente, die zu diesem Field-Set gehören. Der Typ dieser Eigenschaft hängt von der im Browser implementierten Version der Spezifikation ab.
- {{domxref("HTMLFieldSetElement.form")}} {{ReadOnlyInline}}
  - : Ein {{domxref("HTMLFormControlsCollection")}} oder {{domxref("HTMLCollection")}}, das auf das Formular-Element verweist, das dieses Element enthält, falls es in einem Formular ist.
    Wenn das Field-Set kein Nachfahre eines Formular-Elements ist, kann das Attribut die ID eines beliebigen Formular-Elements im selben Dokument sein, mit dem es verknüpft ist, oder der Wert `null`, wenn kein Treffer gefunden wird.
- {{domxref("HTMLFieldSetElement.name")}}
  - : Ein String, der das [`name`](/de/docs/Web/HTML/Element/fieldset#name)-HTML-Attribut widerspiegelt und den Namen des Field-Sets enthält. Dies kann verwendet werden, um im JavaScript auf das Field-Set zuzugreifen. Es ist _nicht_ Teil der Daten, die an den Server gesendet werden.
- {{domxref("HTMLFieldSetElement.type")}} {{ReadOnlyInline}}
  - : Der String "`fieldset`".
- {{domxref("HTMLFieldSetElement.validationMessage")}}
  - : Ein String, der eine lokalisierte Nachricht repräsentiert und die Validierungsbeschränkungen beschreibt, die das Element nicht erfüllt (falls vorhanden). Dieser ist ein leerer String, wenn das Element kein Kandidat für die Einschränkungsvalidierung ist (`willValidate` ist `false`) oder es seine Beschränkungen erfüllt.
- {{domxref("HTMLFieldSetElement.validity")}}
  - : Ein {{domxref("ValidityState")}}, der die Gültigkeitszustände repräsentiert, in denen sich dieses Element befindet.
- {{domxref("HTMLFieldSetElement.willValidate")}}
  - : Ein boolescher Wert `false`, da {{HTMLElement("fieldset")}}-Objekte niemals Kandidaten für die Einschränkungsvalidierung sind.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, {{domxref("HTMLElement")}}._

- {{domxref("HTMLFieldSetElement.checkValidity()")}}
  - : Gibt immer `true` zurück, da {{HTMLElement("fieldset")}}-Objekte niemals Kandidaten für die Einschränkungsvalidierung sind.
- {{domxref("HTMLFieldSetElement.reportValidity()")}}
  - : Gibt immer `true` zurück, da {{HTMLElement("fieldset")}}-Objekte niemals Kandidaten für die Einschränkungsvalidierung sind.
- {{domxref("HTMLFieldSetElement.setCustomValidity()")}}
  - : Legt eine benutzerdefinierte Validierungsnachricht für das Field-Set fest. Wenn diese Nachricht nicht der leere String ist, leidet das Field-Set unter einem benutzerdefinierten Validierungsfehler und validiert nicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("fieldset") }}.
