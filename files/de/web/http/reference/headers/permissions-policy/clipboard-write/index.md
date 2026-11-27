---
title: "Permissions-Policy: clipboard-write-Direktive"
short-title: clipboard-write
slug: Web/HTTP/Reference/Headers/Permissions-Policy/clipboard-write
l10n:
  sourceCommit: 9274067a31863bf4ce49bd8dc3a2623e1f3f7590
---

Die `clipboard-write`-Direktive des HTTP-Headers {{HTTPHeader('Permissions-Policy')}} steuert, ob das aktuelle Dokument mit den Methoden [`write()`](/de/docs/Web/API/Clipboard/write) und [`writeText()`](/de/docs/Web/API/Clipboard/writeText) der [Clipboard API](/de/docs/Web/API/Clipboard_API) Daten in die Zwischenablage des Systems schreiben darf.

Wenn eine festgelegte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe von `write()` und `writeText()` mit einer [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NotAllowedError` abgewiesen.

## Syntax

```http
Permissions-Policy: clipboard-write=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Origins, denen die Nutzung der Funktion erlaubt ist. Weitere Informationen finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-allowlist für `clipboard-write` ist `self`.

## Beispiele

### Grundlegende Verwendung

SecureCorp Inc. möchte `clipboard-write` in allen Cross-Origin-iframes verbieten, außer in solchen mit der Origin `https://example.com`. Dazu kann das Unternehmen den folgenden HTTP-Antwortheader senden, um eine Permissions Policy festzulegen:

```http
Permissions-Policy: clipboard-write=(self "https://example.com")
```

SecureCorp Inc. muss außerdem für jedes `<iframe>`-Element, das Inhalte von `https://example.com` einbettet, die in die Zwischenablage schreiben müssen, ein {{HTMLElement('iframe','allow','#Attributes')}}-Attribut angeben:

```html
<iframe src="https://example.com/copy-widget" allow="clipboard-write"></iframe>
```

Mit diesem Header und dem `allow`-Attribut gilt:

- Das Top-Level-Dokument und Same-Origin-iframes können in die Zwischenablage schreiben. Same-Origin-iframes benötigen kein `allow`-Attribut.
- iframes mit Inhalten von `https://example.com` können in die Zwischenablage schreiben. Ohne das `allow`-Attribut wäre dies nicht möglich, da `https://example.com` nicht in der Standard-allowlist (`self`) enthalten ist.
- iframes mit Inhalten von anderen Origins können nicht in die Zwischenablage schreiben, selbst wenn sie `allow="clipboard-write"` setzen, da ihre Origin nicht in der allowlist des Headers enthalten ist.

Weitere Informationen finden Sie unter [Standard-allowlists](/de/docs/Web/HTTP/Guides/Permissions_Policy#default_allowlists) und [Vererbung von Richtlinien für eingebettete Inhalte](/de/docs/Web/HTTP/Guides/Permissions_Policy#inheritance_of_policies_for_embedded_content) im Leitfaden zur Permissions Policy.

### Verwendung der Standardrichtlinie

Wenn kein `Permissions-Policy`-Header eine allowlist für `clipboard-write` festlegt, gilt die Standard-allowlist `self`. Dadurch ist die Funktion im Top-Level-Dokument und in Same-Origin-iframes verfügbar. In Cross-Origin-iframes kann die Funktion ebenfalls genutzt werden, wenn das `allow`-Attribut gesetzt ist:

```html
<iframe src="https://other.com/share-widget" allow="clipboard-write"></iframe>
```

## Spezifikationen

Diese Funktion ist nicht Bestandteil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Sicherheitsaspekte der Clipboard API](/de/docs/Web/API/Clipboard_API#security_considerations)
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write)
- [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText)
