---
title: prefer_related_applications
slug: Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications
l10n:
  sourceCommit: 2f6ddccbafddcea8f2b68eb4a78b9764892916b3
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}{{SeeCompatTable}}

Der `prefer_related_applications`-Eintrag im Manifest wird verwendet, um Browsern einen Hinweis darauf zu geben, ob sie die Installation von nativen Anwendungen, die im [`related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/related_applications)-Eintrag im Manifest angegeben sind, gegenüber Ihrer Webanwendung bevorzugen sollen.

## Syntax

```json-nolint
/* Boolean values */
"prefer_related_applications": true
"prefer_related_applications": false
```

### Werte

- `prefer_related_applications`
  - : Ein boolescher Wert:
    - Wenn auf `true` gesetzt, können Browser Benutzer dazu auffordern, eine der in [`related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/related_applications) aufgeführten Anwendungen anstelle Ihrer Web-App zu installieren.
    - Wenn auf `false` gesetzt oder weggelassen, werden Browser bevorzugen, Ihre Web-App über verwandte native Anwendungen zu installieren.
      > [!NOTE]
      > Für Chromium-basierte Browser sollte `prefer_related_applications` auf `false` gesetzt oder weggelassen werden, damit Ihre Web-App installierbar ist.

## Beispiele

### Präferenz für die Installation Ihrer Web-App festlegen

Betrachten Sie ein Szenario, in dem sowohl eine Web-App als auch native Apps für Ihr Produkt im Google Play Store und Windows Store verfügbar sind. Wenn Sie verwandte native Apps als Optionen anbieten, aber bevorzugen, dass Benutzer Ihre Web-App installieren, können Sie dies in Ihrer Manifestdatei wie unten gezeigt einrichten. Browser werden Ihre Web-App für die Installation bewerben. Die nativen Apps stehen dennoch als Alternativen zur Verfügung.

```json
{
  "prefer_related_applications": false,
  "related_applications": [
    {
      "platform": "play",
      "id": "com.example.hiking-app"
    },
    {
      "platform": "windows",
      "url": "https://apps.microsoft.com/detail/9nqx6sv74srz"
    }
  ]
}
```

### Präferenz für die Installation der verwandten nativen App festlegen

Um Benutzer zu ermutigen, Ihre native Android-Hiking-App aus dem Google Play Store anstelle der Web-App zu installieren, können Sie die Manifestdatei Ihrer Web-App wie unten gezeigt konfigurieren.

```json
{
  "prefer_related_applications": true,
  "related_applications": [
    {
      "platform": "play",
      "id": "com.example.hiking-app"
    }
  ]
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/related_applications)-Eintrag im Manifest
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest) zur Installierbarkeit Ihrer Web-App
