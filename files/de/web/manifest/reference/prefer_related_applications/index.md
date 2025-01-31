---
title: prefer_related_applications
slug: Web/Manifest/Reference/prefer_related_applications
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest/Reference")}}{{SeeCompatTable}}

Das `prefer_related_applications`-Manifestelement wird verwendet, um Browsern einen Hinweis zu geben, ob sie die Installation von nativen Anwendungen, die im [`related_applications`](/de/docs/Web/Manifest/Reference/related_applications)-Manifestelement angegeben sind, gegenüber Ihrer Webanwendung bevorzugen sollen.

## Syntax

```json-nolint
/* Boolean values */
"prefer_related_applications": true
"prefer_related_applications": false
```

### Werte

- `prefer_related_applications`
  - : Ein boolescher Wert:
    - Wenn auf `true` gesetzt, können Browser Benutzer auffordern, eine der in [`related_applications`](/de/docs/Web/Manifest/Reference/related_applications) aufgelisteten Anwendungen statt Ihrer Web-App zu installieren.
    - Wenn auf `false` gesetzt oder weggelassen, werden Browser Ihre Web-App gegenüber verwandten nativen Anwendungen bevorzugt installieren.
      > [!NOTE]
      > Für auf Chromium basierende Browser sollte `prefer_related_applications` auf `false` gesetzt oder weggelassen werden, damit Ihre Web-App installierbar ist.

## Beispiele

### Präferenz für die Installation Ihrer Web-App festlegen

Betrachten Sie ein Szenario, in dem Sie sowohl eine Web-App als auch native Apps für Ihr Produkt im Google Play Store und Windows Store verfügbar haben. Wenn Sie verwandte native Apps als Optionen anbieten möchten, aber Benutzer bevorzugt Ihre Web-App installieren sollen, können Sie dies in Ihrer Manifestdatei wie unten gezeigt einrichten. Browser werden Ihre Web-App zur Installation hervorheben. Die nativen Apps werden weiterhin als Alternativen verfügbar sein.

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

Um Benutzer dazu zu ermutigen, Ihre native Android-Wander-App aus dem Google Play Store anstatt der Web-App zu installieren, können Sie die Manifestdatei Ihrer Web-App wie unten gezeigt konfigurieren.

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

- Manifestelement [`related_applications`](/de/docs/Web/Manifest/Reference/related_applications)
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest), um Ihre Web-App installierbar zu machen
