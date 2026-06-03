---
title: download
slug: Web/SVG/Reference/Attribute/download
l10n:
  sourceCommit: 94a841dba1498c685a18e72d041fd9057f302d6c
---

Das **`download`**-Attribut weist Browser an, eine {{Glossary("URL", "URL")}} herunterzuladen, anstatt zu ihr zu navigieren, sodass der Benutzer dazu aufgefordert wird, sie als lokale Datei zu speichern.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("a")}}

## Wert

Das `download`-Attribut kann einen optionalen Zeichenfolgenwert annehmen:

- Ohne einen Wert (boolesche Form) wird der Browser einen Dateinamen und eine Erweiterung für den Download vorschlagen, die möglicherweise von den folgenden Quellen abgeleitet werden:
  - Der {{HTTPHeader("Content-Disposition")}} HTTP-Header
  - Das letzte Segment im URL-[Pfad](/de/docs/Web/API/URL/pathname)
  - Der {{Glossary("MIME_type", "Medientyp")}} (aus dem {{HTTPHeader("Content-Type")}}-Header, dem Anfang einer [`data:` URL](/de/docs/Web/URI/Reference/Schemes/data) oder [`Blob.type`](/de/docs/Web/API/Blob/type) für eine [`blob:` URL](/de/docs/Web/URI/Reference/Schemes/blob))
- Mit einem Zeichenfolgenwert wird der Browser diesen String als vorgeschlagenen Dateinamen beim Herunterladen verwenden. `/` und `\`-Zeichen werden in Unterstriche (`_`) umgewandelt. Dateisysteme können andere Zeichen in Dateinamen verbieten, daher passen Browser den vorgeschlagenen Namen bei Bedarf an.

## Beschreibung

Das `download`-Attribut funktioniert nur für [Same-Origin-URLs](/de/docs/Web/Security/Defenses/Same-origin_policy) oder für die `blob:`- und `data:`-Schemata.

Das Download-Verhalten variiert je nach Browser, Benutzereinstellungen und anderen Faktoren. Der Benutzer kann aufgefordert werden, bevor der Download beginnt, und die Datei kann automatisch gespeichert und/oder geöffnet werden, entweder in einer externen Anwendung oder im Browser selbst.

Wenn der {{httpheader("Content-Disposition")}}-Header mit dem `download`-Attribut im Konflikt steht, hängt das resultierende Verhalten vom Header ab:

- Wenn der Header einen Dateinamen angibt, hat dieser Vorrang vor dem Dateinamen, der im `download`-Attribut angegeben ist.
- Wenn der Header eine Disposition von `inline` angibt, priorisieren Chrome und Firefox das `download`-Attribut und behandeln die Ressource als Download.

## Beispiele

### Darstellung der Wirkung von `download`

Dieses Beispiel zeigt die Wirkung des Hinzufügens des `download`-Attributs zu einem SVG-Link.

```css hidden live-sample___download-effect
html,
body {
  height: 100%;
}

svg {
  height: 100px;
}
```

#### HTML

In diesem Beispiel präsentieren wir zwei sehr ähnliche SVG-Links, die auf dieselbe [`data:` URL](/de/docs/Web/URI/Reference/Schemes/data) verweisen, die ein rotes, herzförmiges Bild codiert. Der erste enthält _nicht_ das `download`-Attribut und hat den Linktext "Display my image". Der zweite enthält das `download`-Attribut und hat den Linktext "Download my image".

```html live-sample___download-effect
<svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg">
  <a
    href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 85 C20 55 5 35 5 22 C5 8 15 0 28 0 C36 0 44 5 50 14 C56 5 64 0 72 0 C85 0 95 8 95 22 C95 35 80 55 50 85Z' fill='%23e03'/%3E%3C/svg%3E">
    <text x="10" y="25">Display my image</text>
  </a>
</svg>

<hr />

<svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg">
  <a
    href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 85 C20 55 5 35 5 22 C5 8 15 0 28 0 C36 0 44 5 50 14 C56 5 64 0 72 0 C85 0 95 8 95 22 C95 35 80 55 50 85Z' fill='%23e03'/%3E%3C/svg%3E"
    download="heart.svg">
    <text x="10" y="25">Download my image</text>
  </a>
</svg>
```

#### Ergebnis

{{EmbedLiveSample("download-effect", "320", "220")}}

Klicken Sie auf die beiden Links, um den Unterschied in der Wirkung zu sehen. Der erste navigiert zum verlinkten Bild und zeigt es im eingebetteten Dokument an. Der zweite veranlasst, dass das Bild heruntergeladen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("a")}}
- {{SVGAttr("href")}}
- [`SVGAElement.download`](/de/docs/Web/API/SVGAElement/download)
