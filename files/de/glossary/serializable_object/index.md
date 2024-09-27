---
title: Serializable object
slug: Glossary/Serializable_object
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{GlossarySidebar}}

**Serializable objects** sind Objekte, die in jeder JavaScript-Umgebung ("realm") serialisiert und später deserialisiert werden können.
Dies ermöglicht es ihnen beispielsweise, auf der Festplatte gespeichert und später wiederhergestellt oder mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont zu werden oder zwischen Workern mit [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) geteilt zu werden.

Die Serialisierung umfasst möglicherweise nicht alle Eigenschaften und anderen Aspekte des ursprünglichen Objekts.
Beispielsweise muss eine Serialisierung eines [`DOMException`](/de/docs/Web/API/DOMException) die `name`- und `message`-Eigenschaften enthalten, aber ob sie andere Eigenschaften enthält, hängt von der Implementierung ab.
Infolgedessen kann ein deserialisiertes Objekt nicht ein identisches Klon/Kopie des ursprünglichen Objekts sein.
Das neue deserialisierte Objekt wird jedoch eine [tiefe Kopie](/de/docs/Glossary/deep_copy) sein, sodass alle Eigenschaften, die vom ursprünglichen Objekt serialisiert und dann in das neue Objekt deserialisiert wurden, keine Referenzen mit dem ursprünglichen Objekt teilen.

In einigen Fällen ist es beim Serialisieren und Deserialisieren eines Objekts sinnvoll, einige Ressourcen zu übertragen, statt eine Kopie zu erstellen.
Objekte, die übertragen werden können, werden [Transferable objects](/de/docs/Web/API/Web_Workers_API/Transferable_objects) genannt.

## Unterstützte Objekte

Alle primitiven Werte sind serialisierbar.
Nicht alle Objekte sind serialisierbare Objekte.
Die Objekte, die serialisiert werden können, sind aufgelistet in: [Der strukturierte Klon-Algorithmus > Unterstützte Typen](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types)

> [!NOTE]
> Serializable objects werden in [Web IDL Dateien](https://github.com/w3c/webref/tree/main/ed/idl) mit dem Attribut `[Serializable]` ausgezeichnet.
