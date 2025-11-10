---
title: Serialisierbares Objekt
slug: Glossary/Serializable_object
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Serialisierbare Objekte** sind Objekte, die in jeder JavaScript-Umgebung ("Realm") serialisiert und später deserialisiert werden können. Dadurch können sie beispielsweise auf einer Festplatte gespeichert und später wiederhergestellt, mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen Arbeitern mithilfe von [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) geteilt werden.

Die Serialisierung umfasst möglicherweise nicht alle Eigenschaften und andere Aspekte des ursprünglichen Objekts. Zum Beispiel muss eine Serialisierung eines [`DOMException`](/de/docs/Web/API/DOMException) die Eigenschaften `name` und `message` enthalten, aber ob andere Eigenschaften enthalten sind, hängt von der Implementierung ab. Infolgedessen kann ein deserialisiertes Objekt nicht ein identisches Klon/Kopie des ursprünglichen Objekts sein. Das neue deserialisierte Objekt wird jedoch eine {{Glossary("deep_copy", "tiefe Kopie")}} sein, sodass alle Eigenschaften, die aus dem ursprünglichen Objekt serialisiert und dann in das neue Objekt deserialisiert wurden, keine Referenzen mit dem ursprünglichen Objekt teilen.

In einigen Fällen, wenn ein Objekt serialisiert und deserialisiert wird, macht es Sinn, einige Ressourcen zu übertragen, anstatt eine Kopie zu erstellen. Objekte, die übertragen werden können, werden [Transferable Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) genannt.

## Unterstützte Objekte

Alle primitiven Werte sind serialisierbar. Nicht alle Objekte sind serialisierbare Objekte. Die Objekte, die serialisiert werden können, sind aufgelistet in: [Der strukturierte Klonalgo-Algorithmus > Unterstützte Typen](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types)

> [!NOTE]
> Serialisierbare Objekte werden in [Web IDL-Dateien](https://github.com/w3c/webref/tree/main/ed/idl) mit dem Attribut `[Serializable]` gekennzeichnet.
