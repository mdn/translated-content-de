---
title: FormData
slug: Web/API/FormData
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

Das **`FormData`** Interface bietet eine Möglichkeit, ein Set von Schlüssel/Wert-Paaren zu konstruieren, das Formularfelder und deren Werte repräsentiert und über die Methoden [`fetch()`](/de/docs/Web/API/Window/fetch), [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send) oder [`navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) gesendet werden kann. Es verwendet dasselbe Format, das ein Formular nutzen würde, wenn der Encodierungstyp auf `"multipart/form-data"` gesetzt wäre.

Sie können es auch direkt an den [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) Konstruktor übergeben, wenn Sie Abfrageparameter erzeugen möchten, wie es ein {{HTMLElement("form")}} tun würde, wenn es eine einfache `GET`-Übermittlung nutzen würde.

Ein Objekt, das `FormData` implementiert, kann direkt in einer {{jsxref("Statements/for...of", "for...of")}} Struktur verwendet werden, anstatt [`entries()`](/de/docs/Web/API/FormData/entries): `for (const p of myFormData)` ist gleichbedeutend mit `for (const p of myFormData.entries())`.

## Konstruktor

- [`FormData()`](/de/docs/Web/API/FormData/FormData)
  - : Erstellt ein neues `FormData` Objekt.

## Instanzmethoden

- [`FormData.append()`](/de/docs/Web/API/FormData/append)
  - : Hängt einen neuen Wert an einen vorhandenen Schlüssel innerhalb eines `FormData`-Objekts an oder fügt den Schlüssel hinzu, wenn er noch nicht existiert.
- [`FormData.delete()`](/de/docs/Web/API/FormData/delete)
  - : Löscht ein Schlüssel/Wert-Paar aus einem `FormData`-Objekt.
- [`FormData.entries()`](/de/docs/Web/API/FormData/entries)
  - : Gibt einen [Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols) zurück, der durch alle Schlüssel/Wert-Paare im `FormData` iteriert.
- [`FormData.get()`](/de/docs/Web/API/FormData/get)
  - : Gibt den ersten Wert zurück, der mit einem gegebenen Schlüssel innerhalb eines `FormData`-Objekts assoziiert ist.
- [`FormData.getAll()`](/de/docs/Web/API/FormData/getAll)
  - : Gibt ein Array aller Werte zurück, die mit einem gegebenen Schlüssel innerhalb eines `FormData` verbunden sind.
- [`FormData.has()`](/de/docs/Web/API/FormData/has)
  - : Gibt zurück, ob ein `FormData`-Objekt einen bestimmten Schlüssel enthält.
- [`FormData.keys()`](/de/docs/Web/API/FormData/keys)
  - : Gibt einen [Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols) zurück, der durch alle Schlüssel der Schlüssel/Wert-Paare im `FormData` iteriert.
- [`FormData.set()`](/de/docs/Web/API/FormData/set)
  - : Setzt einen neuen Wert für einen vorhandenen Schlüssel innerhalb eines `FormData`-Objekts oder fügt das Schlüssel/Wert-Paar hinzu, wenn es noch nicht existiert.
- [`FormData.values()`](/de/docs/Web/API/FormData/values)
  - : Gibt einen [Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols) zurück, der durch alle Werte im `FormData` iteriert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
