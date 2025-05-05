---
title: prefer_related_applications
slug: Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

{{SeeCompatTable}}

Das `prefer_related_applications` Manifest-Element wird verwendet, um Browsern einen Hinweis zu geben, ob native Anwendungen, die im [`related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/related_applications) Manifest-Element angegeben sind, bevorzugt über Ihre Webanwendung installiert werden sollen.

## Syntax

```json-nolint
/* Boolean values */
"prefer_related_applications": true
"prefer_related_applications": false
```

### Werte

- `prefer_related_applications`
  - : Ein boolescher Wert:
    - Wenn auf `true` gesetzt, können Browser Benutzer dazu auffordern, eine der in [`related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/related_applications) aufgelisteten Anwendungen statt Ihrer Web-App zu installieren.
    - Wenn auf `false` gesetzt oder weggelassen, werden Browser es bevorzugen, Ihre Web-App über verwandte native Anwendungen zu installieren.
      > [!NOTE]
      > Für Chromium-basierte Browser sollte `prefer_related_applications` auf `false` gesetzt oder weggelassen werden, um ihre Web-App installierbar zu machen.

## Beispiele

### Präferenz für die Installation Ihrer Web-App angeben

Betrachten Sie ein Szenario, in dem Sie sowohl eine Web-App als auch native Apps für Ihr Produkt im Google Play Store und Windows Store verfügbar haben. Wenn Sie verwandte native Apps als Optionen anbieten möchten, aber es bevorzugen, dass Benutzer Ihre Web-App installieren, können Sie es in Ihrer Manifest-Datei wie unten gezeigt einrichten. Browser werden Ihre Web-App zur Installation bewerben. Die nativen Apps sind weiterhin als Alternativen verfügbar.

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

### Präferenz für die Installation der verwandten nativen App angeben

Um Benutzer zu ermutigen, Ihre native Android-Wander-App aus dem Google Play Store bevorzugt über die Web-App zu installieren, können Sie die Manifest-Datei Ihrer Web-App wie unten gezeigt konfigurieren.

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

- [`related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/related_applications) Manifest-Element
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest) für die Installierbarkeit Ihrer Web-App
