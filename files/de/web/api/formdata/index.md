---
title: FormData
slug: Web/API/FormData
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

Das **`FormData`** Interface bietet eine Möglichkeit, ein Set von Schlüssel/Wert-Paaren zu erstellen, die Formularfelder und deren Werte repräsentieren. Diese können mit den Methoden {{domxref("Window/fetch", "fetch()")}}, {{domxref("XMLHttpRequest.send()")}} oder {{domxref("navigator.sendBeacon()")}} gesendet werden. Es verwendet dasselbe Format, das ein Formular verwenden würde, wenn der Codierungstyp auf `"multipart/form-data"` gesetzt wäre.

Sie können es auch direkt an den {{domxref("URLSearchParams")}} Konstruktor übergeben, wenn Sie Abfrageparameter in der Art und Weise generieren möchten, wie es ein {{HTMLElement("form")}} tun würde, wenn es eine einfache `GET`-Übermittlung verwenden würde.

Ein Objekt, das `FormData` implementiert, kann direkt in einer {{jsxref("Statements/for...of", "for...of")}} Struktur verwendet werden, anstatt {{domxref('FormData.entries()', 'entries()')}}: `for (const p of myFormData)` ist äquivalent zu `for (const p of myFormData.entries())`.

## Konstruktor

- {{domxref("FormData.FormData","FormData()")}}
  - : Erstellt ein neues `FormData`-Objekt.

## Instanzmethoden

- {{domxref("FormData.append()")}}
  - : Hängt einen neuen Wert an einen bestehenden Schlüssel in einem `FormData`-Objekt an oder fügt den Schlüssel hinzu, falls dieser noch nicht existiert.
- {{domxref("FormData.delete()")}}
  - : Löscht ein Schlüssel/Wert-Paar aus einem `FormData`-Objekt.
- {{domxref("FormData.entries()")}}
  - : Gibt einen [Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols) zurück, der durch alle im `FormData` enthaltenen Schlüssel/Wert-Paare iteriert.
- {{domxref("FormData.get()")}}
  - : Gibt den ersten Wert zurück, der mit einem gegebenen Schlüssel innerhalb eines `FormData`-Objekts assoziiert ist.
- {{domxref("FormData.getAll()")}}
  - : Gibt ein Array aller mit einem gegebenen Schlüssel innerhalb eines `FormData`-Objekts assoziierten Werte zurück.
- {{domxref("FormData.has()")}}
  - : Gibt zurück, ob ein `FormData`-Objekt einen bestimmten Schlüssel enthält.
- {{domxref("FormData.keys()")}}
  - : Gibt einen [Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols) zurück, der durch alle Schlüssel der im `FormData` enthaltenen Schlüssel/Wert-Paare iteriert.
- {{domxref("FormData.set()")}}
  - : Setzt einen neuen Wert für einen bestehenden Schlüssel in einem `FormData`-Objekt oder fügt das Schlüssel/Wert-Paar hinzu, falls es noch nicht existiert.
- {{domxref("FormData.values()")}}
  - : Gibt einen [Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols) zurück, der durch alle im `FormData` enthaltenen Werte iteriert.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
