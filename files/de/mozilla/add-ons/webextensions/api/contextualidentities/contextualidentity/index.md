---
title: contextualIdentities.ContextualIdentity
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/ContextualIdentity
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Der Typ **`contextualIdentities.ContextualIdentity`** beschreibt eine einzelne kontextuelle Identität.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `cookieStoreId`
  - : `string`. Die Cookie-Store-ID für die Identität. Da kontextuelle Identitäten keine Cookie-Stores teilen, dient dies als eindeutiger Identifikator.
- `color`

  - : `string`. Die Farbe für die Identität. Diese wird in Tabs angezeigt, die zu dieser Identität gehören. Die folgenden Werte sind gültig:

    - "blue"
    - "turquoise"
    - "green"
    - "yellow"
    - "orange"
    - "red"
    - "pink"
    - "purple"
    - "toolbar"

    Der Wert "toolbar" repräsentiert eine themenabhängige Farbe. Identitäten mit der Farbe "toolbar" werden in derselben Farbe wie der Text in der Symbolleiste angezeigt (entsprechend dem [Theme-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme#colors) `"toolbar_field_text"`).

- `colorCode`
  - : `string`. Ein Hex-Code, der die genaue Farbe darstellt, die für die Identität verwendet wird. Zum Beispiel: `"#37adff"`. Im speziellen Fall der Farbe "toolbar" ist `colorCode` immer `"#7c7c7d"`, unabhängig von der angezeigten Farbe.
- `icon`

  - : `string`. Der Name eines Symbols für die Identität. Dieses wird in der Adressleiste für Tabs angezeigt, die zu dieser Identität gehören. Die folgenden Werte sind gültig:

    - "fingerprint"
    - "briefcase"
    - "dollar"
    - "cart"
    - "circle"
    - "gift"
    - "vacation"
    - "food"
    - "fruit"
    - "pet"
    - "tree"
    - "chill"
    - "fence"

- `iconUrl`
  - : `string`. Eine vollständige resource:// URL, die auf das Symbol der Identität zeigt. Zum Beispiel: "resource://usercontext-content/fingerprint.svg".
- `name`
  - : `string`. Name der Identität. Dieser wird in der Adressleiste für Tabs angezeigt, die zu dieser Identität gehören. Beachten Sie, dass Namen nicht eindeutig sein müssen.

## Browser-Kompatibilität

{{Compat}}
