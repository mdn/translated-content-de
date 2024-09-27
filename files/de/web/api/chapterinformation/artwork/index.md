---
title: "ChapterInformation: artwork-Eigenschaft"
short-title: artwork
slug: Web/API/ChapterInformation/artwork
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{APIRef("Media Session API")}}{{SeeCompatTable}}

Die schreibgeschützte **`artwork`**-Eigenschaft der [`ChapterInformation`](/de/docs/Web/API/ChapterInformation)-Schnittstelle gibt ein {{jsxref("Array")}} von Objekten zurück, die Bilder repräsentieren, die mit dem Kapitel verknüpft sind.

## Wert

Ein {{jsxref("Array")}} von Objekten. Jedes Objekt enthält die folgenden Eigenschaften:

- `src`
  - : Ein String, der die URL repräsentiert, von der der User Agent die Bilddaten abruft.
- `sizes`
  - : Ein String, der eine oder mehrere Größen für die Ressource darstellt. Sein Wert kann das Schlüsselwort `any` sein (was ein skalierbares Vektorformat wie SVG repräsentiert) oder eine durch Leerzeichen getrennte Liste von Tokens im Format `<Breite in Pixeln>x<Höhe in Pixeln>` oder `<Breite in Pixeln>X<Höhe in Pixeln>`. Wenn mehrere Größen angegeben sind, kann der User Agent die für den aktuellen Kontext am besten geeignete Größe laden, vorausgesetzt, diese Größen sind in der verknüpften Ressource verfügbar.
- `type`
  - : Ein String, der einen [MIME-Typ](/de/docs/Glossary/MIME_type) Hinweis darstellt, der es dem User Agent ermöglicht, Bildtypen zu ignorieren, die er nicht unterstützt. Der User Agent kann jedoch nach dem Herunterladen des Bildes weiterhin MIME-Typ-Sniffing verwenden, um dessen Typ zu bestimmen.

## Beispiele

Siehe die Hauptseite von [`ChapterInformation`](/de/docs/Web/API/ChapterInformation) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ChapterInformation`](/de/docs/Web/API/ChapterInformation)
