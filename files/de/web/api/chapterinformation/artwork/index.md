---
title: "ChapterInformation: artwork-Eigenschaft"
short-title: artwork
slug: Web/API/ChapterInformation/artwork
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{APIRef("Media Session API")}}{{SeeCompatTable}}

Die **`artwork`** schreibgeschützte Eigenschaft der {{domxref("ChapterInformation")}}-Schnittstelle gibt ein {{jsxref("Array")}} von Objekten zurück, die Bilder darstellen, die mit dem Kapitel verbunden sind.

## Wert

Ein {{jsxref("Array")}} von Objekten. Jedes Objekt enthält die folgenden Eigenschaften:

- `src`
  - : Ein String, der die URL darstellt, von der der Benutzeragent die Bilddaten abruft.
- `sizes`
  - : Ein String, der eine oder mehrere Größen für die Ressource darstellt. Sein Wert kann das Schlüsselwort `any` sein (was ein skalierbares Vektorformat wie SVG darstellt) oder eine durch Leerzeichen getrennte Liste von Tokens im Format `<Breite in Pixel>x<Höhe in Pixel>` oder `<Breite in Pixel>X<Höhe in Pixel>`. Wenn mehrere Größen angegeben sind, kann der Benutzeragent die für den aktuellen Kontext am besten geeignete Größe laden, sofern diese Größen in der verknüpften Ressource verfügbar sind.
- `type`
  - : Ein String, der einen {{Glossary("MIME type")}}-Hinweis darstellt, der es dem Benutzeragenten ermöglicht, Bildtypen zu ignorieren, die nicht unterstützt werden. Der Benutzeragent kann jedoch nach dem Herunterladen des Bildes immer noch ein MIME-Typ-Sniffing durchführen, um den Typ zu bestimmen.

## Beispiele

Sehen Sie sich die Hauptseite von {{domxref("ChapterInformation")}} für ein Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("ChapterInformation")}}
