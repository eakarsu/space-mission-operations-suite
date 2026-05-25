# Space Mission Operations Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AISpaceMissionOperationsAssistant`
- `AISpaceMissionOperationsOperations`
- `AISpaceMissionOperationsAnalytics`
- `AISpaceMissionOperationsWorkflow`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/space-mission-operations-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:4940`

Seeded users:
- `admin@space-mission-operations.local / admin123`
- `manager@space-mission-operations.local / manager123`
- `analyst@space-mission-operations.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/space-mission-operations-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:4940 npm run smoke
```
