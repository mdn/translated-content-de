---
title: prefer_related_applications
slug: Web/Manifest/prefer_related_applications
l10n:
  sourceCommit: 74a4aacec4ef6178f6a80b85a8fa2723b64ca7e4
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}{{SeeCompatTable}}

Das `prefer_related_applications`-Manifestmitglied wird verwendet, um Browsern einen Hinweis zu geben, ob sie die Installation von nativen Anwendungen, die im [`related_applications`](/de/docs/Web/Manifest/related_applications)-Manifestmitglied angegeben sind, gegenüber Ihrer Webanwendung bevorzugen sollen.

## Syntax

```json-nolint
/* Boolean values */
"prefer_related_applications": true
"prefer_related_applications": false
```

### Werte

- `prefer_related_applications`
  - : Ein boolescher Wert:
    - Wenn auf `true` gesetzt, können Browser Benutzer auffordern, eine der in [`related_applications`](/de/docs/Web/Manifest/related_applications) aufgeführten Anwendungen anstelle Ihrer Web-App zu installieren.
    - Wenn auf `false` gesetzt oder weggelassen, werden Browser bevorzugen, Ihre Web-App über verwandte native Anwendungen zu installieren.
      > [!NOTE]
      > Für Chromium-basierte Browser sollte `prefer_related_applications` auf `false` gesetzt oder weggelassen werden, damit Ihre Web-App installierbar ist.

## Beispiele

### Bevorzugung der Installation Ihrer Web-App

Betrachten Sie ein Szenario, in dem Sie sowohl eine Web-App als auch native Apps für Ihr Produkt im Google Play Store und Windows Store verfügbar haben. Wenn Sie verwandte native Apps als Optionen anbieten, aber bevorzugen, dass Benutzer Ihre Web-App installieren, können Sie dies in Ihrer Manifestdatei wie unten gezeigt festlegen. Browser werden Ihre Web-App zur Installation bewerben. Die nativen Apps stehen weiterhin als Alternativen zur Verfügung.

```json
{
  "prefer_related_applications": false,
  "related_applications": [
    {
      "platform": "play",
      "id": "com.example.hikingapp"
    },
    {
      "platform": "windows",
      "url": "https://apps.microsoft.com/store/hikingapp/9WZDNCRFHVJL"
    }
  ]
}
```

### Bevorzugung der Installation der verwandten nativen App

Um Benutzer zu ermutigen, Ihre native Android-Wander-App aus dem Google Play Store bevorzugt gegenüber der Web-App zu installieren, können Sie die Manifestdatei Ihrer Web-App wie unten gezeigt konfigurieren.

```json
{
  "prefer_related_applications": true,
  "related_applications": [
    {
      "platform": "play",
      "id": "com.example.hikingapp"
    }
  ]
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`related_applications`](/de/docs/Web/Manifest/related_applications)-Manifestmitglied
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest), um Ihre Web-App installierbar zu machen
