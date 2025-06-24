---
title: contextualIdentities.ContextualIdentity
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/ContextualIdentity
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Der Typ **`contextualIdentities.ContextualIdentity`** beschreibt eine einzelne kontextuelle Identität.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `cookieStoreId`
  - : `string`. Die Cookie-Store-ID für die Identität. Da kontextuelle Identitäten keine Cookie-Stores teilen, dient dies als eindeutiger Bezeichner.
- `color`

  - : `string`. Die Farbe für die Identität. Diese wird in Tabs gezeigt, die zu dieser Identität gehören. Die folgenden Werte sind gültig:

    - "blue"
    - "turquoise"
    - "green"
    - "yellow"
    - "orange"
    - "red"
    - "pink"
    - "purple"
    - "toolbar"

    Der Wert "toolbar" repräsentiert eine themespezifische Farbe. Identitäten mit der Farbe "toolbar" werden in derselben Farbe angezeigt wie der Text in der Symbolleiste (entsprechend dem [Theme-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme#colors) `"toolbar_field_text"`).

- `colorCode`
  - : `string`. Ein Hex-Code, der die genaue Farbe für die Identität darstellt. Zum Beispiel: `"#37adff"`. Im speziellen Fall der "toolbar"-Farbe ist `colorCode` immer `"#7c7c7d"`, unabhängig von der angezeigten Farbe.
- `icon`

  - : `string`. Der Name eines Icons für die Identität. Dieses wird in der URL-Leiste von Tabs angezeigt, die zu dieser Identität gehören. Die folgenden Werte sind gültig:
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
  - : `string`. Eine vollständige resource:// URL, die auf das Icon der Identität verweist. Zum Beispiel: "resource://usercontext-content/fingerprint.svg".
- `name`
  - : `string`. Name der Identität. Dieser wird in der URL-Leiste von Tabs angezeigt, die zu dieser Identität gehören. Beachten Sie, dass Namen nicht einzigartig sein müssen.

## Browser-Kompatibilität

{{Compat}}
