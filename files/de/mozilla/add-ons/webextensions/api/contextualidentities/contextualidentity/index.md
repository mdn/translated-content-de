---
title: contextualIdentities.ContextualIdentity
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/ContextualIdentity
l10n:
  sourceCommit: 8ede916a8af8537114db737b914cef1d721fda84
---

Der **`contextualIdentities.ContextualIdentity`**-Typ beschreibt eine kontextuelle Identität.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `cookieStoreId`
  - : `string`. Die Cookie-Store-ID für die Identität. Da kontextuelle Identitäten keine Cookie-Stores teilen, dient dies als eindeutiger Bezeichner.
- `color`
  - : `string`. Die Farbe für die Identität. Diese Farbe wird in den Tabs angezeigt, die zu der Identität gehören. Eine Liste der unterstützten Werte finden Sie unter {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}}.
- `colorCode`
  - : `string`. Ein Hex-Code, der die Farbe repräsentiert, die für die Identität verwendet wird. Zum Beispiel: `"#37adff"`.
- `icon`
  - : `string`. Der Name eines Symbols für die Identität. Dieses Symbol wird in der URL-Leiste für Tabs angezeigt, die zu dieser Identität gehören. Eine Liste der unterstützten Werte finden Sie unter {{WebExtAPIRef("contextualIdentities.getSupportedIcons()")}}.
- `iconUrl`
  - : `string`. Eine vollständige resource:// URL, die auf das Symbol der Identität verweist. Zum Beispiel: "resource://usercontext-content/fingerprint.svg".
- `name`
  - : `string`. Der Name der Identität. Dieser Name wird in der URL-Leiste für Tabs angezeigt, die zu dieser Identität gehören. Beachten Sie, dass Namen nicht eindeutig sein müssen.

## Browser-Kompatibilität

{{Compat}}
