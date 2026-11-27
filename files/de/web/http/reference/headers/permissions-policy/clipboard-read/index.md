---
title: "Permissions-Policy: clipboard-read-Direktive"
short-title: clipboard-read
slug: Web/HTTP/Reference/Headers/Permissions-Policy/clipboard-read
l10n:
  sourceCommit: 9274067a31863bf4ce49bd8dc3a2623e1f3f7590
---

Die `clipboard-read`-Direktive des HTTP-Headers {{HTTPHeader('Permissions-Policy')}} steuert, ob das aktuelle Dokument mit den Methoden [`read()`](/de/docs/Web/API/Clipboard/read) und [`readText()`](/de/docs/Web/API/Clipboard/readText) der [Clipboard API](/de/docs/Web/API/Clipboard_API) Daten aus der Zwischenablage des Systems lesen darf.

Wenn eine festgelegte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe von `read()` und `readText()` mit einer [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NotAllowedError` zurückgewiesen.

## Syntax

```http
Permissions-Policy: clipboard-read=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Origins, denen die Nutzung der Funktion gestattet ist.
    Weitere Einzelheiten finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die standardmäßige Allowlist für `clipboard-read` ist `self`.

## Beispiele

### Grundlegende Verwendung

SecureCorp Inc. möchte `clipboard-read` in allen Cross-Origin-Iframes untersagen, außer in solchen mit dem Origin `https://example.com`.
Dazu kann das Unternehmen den folgenden HTTP-Antwortheader ausliefern, um eine Permissions Policy festzulegen:

```http
Permissions-Policy: clipboard-read=(self "https://example.com")
```

SecureCorp Inc. muss außerdem für jedes `<iframe>`-Element, das Inhalte von `https://example.com` einbettet und die Zwischenablage lesen können soll, ein {{HTMLElement('iframe','allow','#Attributes')}}-Attribut angeben:

```html
<iframe src="https://example.com/notes-app" allow="clipboard-read"></iframe>
```

Mit diesem Header und dem `allow`-Attribut gilt:

- Das oberste Dokument und Same-Origin-Iframes können die Zwischenablage lesen.
  Same-Origin-Iframes benötigen das `allow`-Attribut nicht.
- Iframes mit Inhalten von `https://example.com` können die Zwischenablage lesen.
  Ohne das `allow`-Attribut wäre dies nicht möglich, da `https://example.com` nicht in der standardmäßigen Allowlist (`self`) enthalten ist.
- Iframes mit Inhalten von anderen Origins können die Zwischenablage nicht lesen, selbst wenn sie `allow="clipboard-read"` setzen, da ihre Origins nicht in der Allowlist des Headers enthalten sind.

Weitere Informationen finden Sie unter [Standardmäßige Allowlists](/de/docs/Web/HTTP/Guides/Permissions_Policy#default_allowlists) und [Vererbung von Richtlinien für eingebettete Inhalte](/de/docs/Web/HTTP/Guides/Permissions_Policy#inheritance_of_policies_for_embedded_content) im Permissions-Policy-Leitfaden.

### Verwendung der Standardrichtlinie

Wenn kein `Permissions-Policy`-Header eine Allowlist für `clipboard-read` festlegt, gilt die standardmäßige Allowlist `self`.
Damit ist die Funktion im obersten Dokument und in Same-Origin-Iframes verfügbar. Sie kann auch in Cross-Origin-Iframes genutzt werden, wenn dort das `allow`-Attribut gesetzt ist:

```html
<iframe src="https://other.com/paste-tool" allow="clipboard-read"></iframe>
```

## Spezifikationen

Diese Funktion ist nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Sicherheitsaspekte der Clipboard API](/de/docs/Web/API/Clipboard_API#security_considerations)
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read)
- [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText)
