---
title: prefer_related_applications
slug: Web/Manifest/prefer_related_applications
l10n:
  sourceCommit: 0f7f70e7fd76f8e32cd02261bc10630d753fbf0b
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}{{SeeCompatTable}}

Das `prefer_related_applications`-Manifestmitglied wird verwendet, um Browsern einen Hinweis zu geben, ob sie bevorzugt die in dem [`related_applications`](/de/docs/Web/Manifest/related_applications)-Manifestmitglied angegebenen nativen Anwendungen über Ihre Webanwendung installieren sollen.

## Syntax

```json-nolint
/* Boolean values */
"prefer_related_applications": true
"prefer_related_applications": false
```

### Werte

- `prefer_related_applications`
  - : Ein boolescher Wert:
    - Wenn auf `true` gesetzt, könnten Browser Nutzer dazu auffordern, eine der in [`related_applications`](/de/docs/Web/Manifest/related_applications) aufgeführten Anwendungen anstelle Ihrer Web-App zu installieren.
    - Wenn auf `false` gesetzt oder weggelassen, werden Browser Ihre Web-App gegenüber verwandten nativen Anwendungen bevorzugen.
      > [!NOTE]
      > Für Chromium-basierte Browser sollte `prefer_related_applications` auf `false` gesetzt oder weggelassen werden, um Ihre Web-App installierbar zu machen.

## Beispiele

### Bevorzugung der Installation Ihrer Web-App

Betrachten Sie ein Szenario, in dem Sie sowohl eine Web-App als auch native Apps für Ihr Produkt im Google Play Store und Windows Store verfügbar haben. Wenn Sie verwandte native Apps als Optionen anbieten möchten, aber bevorzugen, dass Nutzer Ihre Web-App installieren, können Sie dies in Ihrer Manifestdatei wie unten gezeigt festlegen. Browser werden Ihre Web-App zur Installation fördern. Die nativen Apps werden jedoch weiterhin als Alternativen verfügbar sein.

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

### Bevorzugung der Installation der verwandten nativen App

Um Nutzer dazu zu ermutigen, Ihre native Android-Wander-App aus dem Google Play Store anstelle der Web-App zu installieren, können Sie die Manifestdatei Ihrer Web-App wie unten gezeigt konfigurieren.

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

- [`related_applications`](/de/docs/Web/Manifest/related_applications) Manifestmitglied
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest) zur Installierbarkeit Ihrer Web-App
